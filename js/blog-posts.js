const SUPABASE_URL = 'https://inwjwyawaklcflolhyeo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlud2p3eWF3YWtsY2Zsb2xoeWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyOTY4NTgsImV4cCI6MjA4OTg3Mjg1OH0.jSSrZoHH1VvKNdvXyK-qmioeXIwzkF7k6DEziNgAYxA';

const CATEGORY_LABELS = {
  'digital-marketing': 'Digital Marketing',
  'event-marketing': 'Event Marketing',
  'podcasting': 'Podcasting',
  'branding': 'Branding',
  'video': 'Video',
  'landing-pages': 'Landing Pages',
  'one-pagers': 'One Pagers',
  'web-development': 'Web Development',
};

const CATEGORY_COLORS = {
  'digital-marketing': 'bg-blue-100 text-blue-800',
  'event-marketing': 'bg-amber-100 text-amber-800',
  'podcasting': 'bg-rose-100 text-rose-800',
  'branding': 'bg-teal-100 text-teal-800',
  'video': 'bg-orange-100 text-orange-800',
  'landing-pages': 'bg-green-100 text-green-800',
  'one-pagers': 'bg-gray-100 text-gray-700',
  'web-development': 'bg-cyan-100 text-cyan-800',
};

async function fetchPosts() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/portfolio_posts?published=eq.true&order=created_at.desc`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );
  if (!res.ok) return [];
  return res.json();
}

function categoryBadge(category) {
  const label = CATEGORY_LABELS[category] || category;
  const color = CATEGORY_COLORS[category] || 'bg-gray-100 text-gray-700';
  return `<span class="inline-block text-xs font-medium px-2 py-0.5 rounded ${color}">${label}</span>`;
}

function renderCard(post) {
  const card = document.createElement('article');
  card.className =
    'blog-card group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow cursor-pointer overflow-hidden';
  card.setAttribute('data-slug', post.slug);

  const imgSrc = post.cover_image || 'images/digitalmarketing.png';

  card.innerHTML = `
    <div class="relative overflow-hidden aspect-[16/9] bg-gray-100">
      <img src="${imgSrc}" alt="${post.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" onerror="this.src='images/digitalmarketing.png'" />
      <div class="absolute top-3 left-3">${categoryBadge(post.category)}</div>
    </div>
    <div class="flex flex-col flex-1 p-5 gap-3">
      <h3 class="text-base font-bold font-heading text-black leading-snug">${post.title}</h3>
      <p class="text-sm text-gray-600 flex-1 line-clamp-3">${post.excerpt}</p>
      <div class="flex flex-wrap gap-1.5 mt-auto pt-2">
        ${post.tags.slice(0, 3).map(t => `<span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">${t}</span>`).join('')}
      </div>
    </div>
  `;

  card.addEventListener('click', () => openPost(post));
  return card;
}

function renderPostDetail(post) {
  const container = document.getElementById('blog-post-detail');
  container.innerHTML = `
    <button id="blog-back-btn" class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-6">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      Back to Latest Work
    </button>
    <div class="mb-6">
      ${categoryBadge(post.category)}
    </div>
    <h1 class="text-2xl sm:text-3xl font-bold font-heading text-black mb-4 leading-tight">${post.title}</h1>
    <p class="text-base text-gray-500 mb-6 italic">${post.excerpt}</p>
    <img src="${post.cover_image || 'images/digitalmarketing.png'}" alt="${post.title}" class="w-full rounded-xl mb-8 object-cover max-h-80" onerror="this.src='images/digitalmarketing.png'" />
    <div class="prose max-w-none text-gray-700 space-y-4 blog-body">${post.body}</div>
    <div class="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
      ${post.tags.map(t => `<span class="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">${t}</span>`).join('')}
    </div>
  `;

  document.getElementById('blog-back-btn').addEventListener('click', closePost);
}

function openPost(post) {
  const gridView = document.getElementById('blog-grid-view') || document.getElementById('blog-all-grid-view');
  if (gridView) gridView.classList.add('hidden');
  document.getElementById('blog-post-detail').classList.remove('hidden');
  renderPostDetail(post);
  window.portfolioItemSelected = true;
}

function closePost() {
  document.getElementById('blog-post-detail').classList.add('hidden');
  const gridView = document.getElementById('blog-grid-view') || document.getElementById('blog-all-grid-view');
  if (gridView) gridView.classList.remove('hidden');
  window.portfolioItemSelected = false;
}

function renderFilterBar(posts, gridEl) {
  const categories = [...new Set(posts.map(p => p.category))];
  const bar = document.getElementById('blog-filter-bar');
  if (!bar) return;

  const allBtn = createFilterBtn('All', true);
  allBtn.addEventListener('click', () => {
    setActiveFilter(bar, allBtn);
    renderGrid(posts, gridEl);
  });
  bar.appendChild(allBtn);

  categories.forEach(cat => {
    const btn = createFilterBtn(CATEGORY_LABELS[cat] || cat, false);
    btn.addEventListener('click', () => {
      setActiveFilter(bar, btn);
      renderGrid(posts.filter(p => p.category === cat), gridEl);
    });
    bar.appendChild(btn);
  });
}

function createFilterBtn(label, active) {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.className = `filter-btn px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
    active
      ? 'bg-primary text-primary-foreground border-primary'
      : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
  }`;
  return btn;
}

function setActiveFilter(bar, activeBtn) {
  bar.querySelectorAll('.filter-btn').forEach(b => {
    b.className = b.className
      .replace('bg-primary text-primary-foreground border-primary', '')
      .trim();
    b.classList.add('bg-white', 'text-gray-600', 'border-gray-300', 'hover:border-primary', 'hover:text-primary');
  });
  activeBtn.classList.remove('bg-white', 'text-gray-600', 'border-gray-300', 'hover:border-primary', 'hover:text-primary');
  activeBtn.classList.add('bg-primary', 'text-primary-foreground', 'border-primary');
}

function renderGrid(posts, gridEl) {
  gridEl.innerHTML = '';
  if (posts.length === 0) {
    gridEl.innerHTML = '<p class="text-gray-500 col-span-3 text-center py-12">No posts found.</p>';
    return;
  }
  posts.forEach(post => gridEl.appendChild(renderCard(post)));
}

const IS_HOME_PAGE = document.getElementById('blog-posts-grid') && !document.getElementById('blog-all-posts-grid');
const HOME_LIMIT = 3;

document.addEventListener('DOMContentLoaded', async () => {
  const gridEl = document.getElementById('blog-posts-grid') || document.getElementById('blog-all-posts-grid');
  if (!gridEl) return;

  const isHome = gridEl.id === 'blog-posts-grid';

  gridEl.innerHTML = `
    <div class="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center py-12">
      <div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  `;

  const posts = await fetchPosts();

  if (isHome) {
    const limited = posts.slice(0, HOME_LIMIT);
    renderGrid(limited, gridEl);

    const viewAllWrap = document.getElementById('blog-view-all-wrap');
    if (viewAllWrap && posts.length > HOME_LIMIT) {
      viewAllWrap.classList.remove('hidden');
    }
  } else {
    renderFilterBar(posts, gridEl);
    renderGrid(posts, gridEl);
  }
});

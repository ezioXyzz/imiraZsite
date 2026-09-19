/* ImiraZSite — frontend only. No backend is connected yet.
   Every function marked "API HOOK" is where a real request will go later. */
(() => {
'use strict';

/* ---------- icons ---------- */
const P = {
  folder:'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  file:'M14 3v5h5M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z',
  image:'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 16l5-5 5 5 3-3 5 5M9 9h.01',
  video:'M4 5h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM16 10l5-3v10l-5-3z',
  audio:'M9 18V6l11-2v12M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm11-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  doc:'M14 3v5h5M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM9 13h6M9 17h4',
  archive:'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3zM4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM11 11h2M11 15h2',
  code:'M9 8l-4 4 4 4m6-8l4 4-4 4',
  search:'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm10 2l-4.5-4.5',
  bell:'M18 8a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7M13.7 20a2 2 0 0 1-3.4 0',
  grid:'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  list:'M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01',
  more:'M12 6h.01M12 12h.01M12 18h.01',
  close:'M6 6l12 12M18 6L6 18',
  upload:'M12 16V4m0 0L7 9m5-5l5 5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
  download:'M12 4v12m0 0l5-5m-5 5l-5-5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
  plus:'M12 5v14M5 12h14', star:'M12 3.5l2.6 5.5 5.9.8-4.3 4.2 1 6-5.2-2.8L6.8 20l1-6-4.3-4.2 5.9-.8z',
  trash:'M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13h10l1-13',
  clock:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  home:'M4 11l8-7 8 7v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z',
  settings:'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2 2 2 0 1 1-4 0 1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 15a2 2 0 1 1 0-4 1.7 1.7 0 0 0 1.4-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 4a2 2 0 1 1 4 0 1.7 1.7 0 0 0 2.9 1.4l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 21 11a2 2 0 1 1 0 4 1.7 1.7 0 0 0-1.6 0z',
  user:'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  logout:'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
  eye:'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  eyeoff:'M3 3l18 18M10.6 10.6a3 3 0 0 0 4.2 4.2M9.9 5.2A9.8 9.8 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4M6.2 6.2A17 17 0 0 0 2 12s3.5 7 10 7c1.7 0 3.2-.5 4.5-1.2',
  edit:'M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17z', move:'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM12 10v6m-3-3h6',
  share:'M15 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4',
  restore:'M3 12a9 9 0 1 0 3-6.7M3 4v5h5', shield:'M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6z',
  check:'M20 6L9 17l-5-5', play:'M8 5l12 7-12 7z', pause:'M9 5v14M15 5v14', info:'M12 16v-5M12 8h.01',
  alert:'M12 9v4M12 17h.01M10.3 3.9L2.5 17.5A2 2 0 0 0 4.2 20.5h15.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
  menu:'M4 7h16M4 12h16M4 17h16', chevron:'M6 9l6 6 6-6', spark:'M12 3l1.9 5.6L19.5 10l-4.6 3.2L16 19l-4-2.8L8 19l1.1-5.8L4.5 10l5.6-1.4z'
};
const icon = (n, s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[n] || P.file}"/></svg>`;
const KIND = { folder:'folder', png:'image', jpg:'image', jpeg:'image', gif:'image', webp:'image',
  mp4:'video', mov:'video', mkv:'video', mp3:'audio', wav:'audio', flac:'audio',
  txt:'doc', pdf:'doc', docx:'doc', zip:'archive', rar:'archive', '7z':'archive',
  js:'code', html:'code', css:'code', json:'code' };
const ext = n => (n.split('.').pop() || '').toLowerCase();
const kindOf = it => it.type === 'folder' ? 'folder' : (KIND[ext(it.name)] || 'file');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));

/* ---------- state (replace with API data later) ---------- */
const S = {
  view: localStorage.getItem('imz.view') || 'grid',
  theme: localStorage.getItem('imz.theme') || 'dark',
  section: 'dashboard', query: '', sort: 'name',
  user: { name: 'Ezio', handle: '@ezioXyzz', initials: 'EZ' },
  storage: { usedGB: 72, totalGB: 100,
    breakdown: [ ['Videos', 31, 'var(--accent-2)'], ['Photos', 16, 'var(--cyan)'],
      ['Games', 13, 'var(--violet)'], ['Documents', 7, 'var(--warning)'], ['Other', 5, 'var(--muted)'] ] },
  items: [
    { id:'f1', name:'Documents', type:'folder', size:'—', modified:'Today', count:24 },
    { id:'f2', name:'Games', type:'folder', size:'—', modified:'Yesterday', count:9 },
    { id:'f3', name:'Photos', type:'folder', size:'—', modified:'Sep 17', count:412 },
    { id:'f4', name:'Videos', type:'folder', size:'—', modified:'Sep 16', count:58 },
    { id:'f5', name:'Projects', type:'folder', size:'—', modified:'Sep 12', count:17 },
    { id:'i1', name:'video.mp4', type:'file', size:'124.5 MB', modified:'Today', group:'Today', starred:true },
    { id:'i2', name:'project.zip', type:'file', size:'48.2 MB', modified:'Yesterday', group:'Yesterday' },
    { id:'i3', name:'notes.txt', type:'file', size:'12 KB', modified:'Sep 17', group:'Earlier this week',
      text:'Sprint notes\n\n- Finish the storage view\n- Ask about folder sharing\n- Back up the Photos folder' },
    { id:'i4', name:'wallpaper.png', type:'file', size:'4.1 MB', modified:'Sep 16', group:'Earlier this week', starred:true },
    { id:'i5', name:'music.mp3', type:'file', size:'8.6 MB', modified:'Sep 9', group:'Older' },
    { id:'i6', name:'archive.zip', type:'file', size:'212 MB', modified:'Aug 30', group:'Older' }
  ],
  trash: [ { id:'t1', name:'old-build.zip', type:'file', size:'96 MB', modified:'Deleted Sep 14' },
           { id:'t2', name:'screenshot.png', type:'file', size:'820 KB', modified:'Deleted Sep 11' } ],
  uploads: []
};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const byId = id => S.items.find(i => i.id === id) || S.trash.find(i => i.id === id);

/* ---------- toasts ---------- */
function showToast(message, type = 'info', title = '') {
  const host = $('#toasts'); if (!host) return;
  const el = document.createElement('div');
  el.className = `toast ${type}`; el.setAttribute('role', 'status');
  const ic = { success:'check', error:'alert', warning:'alert', info:'info' }[type] || 'info';
  el.innerHTML = `<span style="color:var(--${type === 'info' ? 'accent-2' : type})">${icon(ic)}</span>
    <div>${title ? `<b>${esc(title)}</b>` : ''}<span class="muted">${esc(message)}</span></div>`;
  host.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 250); }, 3600);
}

/* ---------- modals ---------- */
let lastFocus = null;
function openModal(id) {
  const o = $('#' + id); if (!o) return;
  lastFocus = document.activeElement; o.classList.add('open');
  (o.querySelector('input, button:not([data-close])') || o).focus();
}
function closeModal(id) {
  const o = id ? $('#' + id) : $('.overlay.open'); if (!o) return;
  o.classList.remove('open'); lastFocus && lastFocus.focus();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeMenu(); closeModal(); }
  if (e.key === 'Tab') {
    const o = $('.overlay.open'); if (!o) return;
    const f = $$('button, input, [href], select, textarea', o).filter(x => !x.disabled);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
document.addEventListener('click', e => {
  if (e.target.classList.contains('overlay')) closeModal();
  const c = e.target.closest('[data-close]'); if (c) closeModal(c.closest('.overlay')?.id);
});

/* ---------- context menu ---------- */
const menuEl = () => $('#ctxMenu');
function openMenu(x, y, id) {
  const m = menuEl(); m.dataset.target = id; m.classList.add('open');
  const r = m.getBoundingClientRect();
  m.style.left = Math.min(x, innerWidth - r.width - 12) + 'px';
  m.style.top = Math.min(y, innerHeight - r.height - 12) + 'px';
}
function closeMenu() { menuEl()?.classList.remove('open'); $$('.dropdown').forEach(d => d.hidden = true); }
document.addEventListener('click', e => { if (!e.target.closest('.menu, [data-menu], [data-drop]')) closeMenu(); });

/* ---------- API HOOKS (no backend connected) ---------- */
const pending = what => showToast(`${what} needs the backend, which isn't connected yet.`, 'warning', 'Not available');
function loginUser(username, password, remember) { /* API HOOK: POST /api/login */ return Promise.resolve({ ok:false, reason:'no-backend', username, remember: !!remember, passwordLength: password.length }); }
function logoutUser() { /* API HOOK: POST /api/logout */ location.href = 'login.html'; }
function uploadFile(file) { /* API HOOK: PUT /api/files */ return queueUpload(file); }
function downloadFile(id) { pending('Downloading'); }
function deleteFile(id) {
  const i = S.items.findIndex(x => x.id === id); if (i < 0) return;
  S.trash.unshift({ ...S.items[i], modified: 'Deleted just now' });
  S.items.splice(i, 1); render(); showToast('Moved to trash. Restore it any time.', 'success', 'Deleted');
}
function renameFile(id, name) { const it = byId(id); if (!it) return; it.name = name; render(); showToast(`Renamed to ${name}.`, 'success', 'Renamed'); }
function moveFile(id) { pending('Moving files'); }
function starFile(id) { const it = byId(id); if (!it) return; it.starred = !it.starred; render();
  showToast(it.starred ? `${it.name} added to starred.` : `${it.name} removed from starred.`, 'success', it.starred ? 'Starred' : 'Unstarred'); }
function restoreFile(id) {
  const i = S.trash.findIndex(x => x.id === id); if (i < 0) return;
  const it = S.trash.splice(i, 1)[0]; it.modified = 'Restored just now'; S.items.push(it);
  render(); showToast(`${it.name} is back in My files.`, 'success', 'Restored');
}
function createFolder(name) {
  S.items.unshift({ id:'n' + Date.now(), name, type:'folder', size:'—', modified:'Just now', count:0 });
  render(); showToast(`${name} is ready.`, 'success', 'Folder created');
}
function searchFiles(q) { S.query = q.trim().toLowerCase(); render(); }
function sortFiles(mode) { S.sort = mode; render(); }
function getStorageInfo() { const { usedGB, totalGB } = S.storage;
  return { usedGB, totalGB, freeGB: totalGB - usedGB, percent: Math.round(usedGB / totalGB * 100) }; }

/* ---------- filtering ---------- */
function visible(list) {
  let out = list.filter(i => !S.query || i.name.toLowerCase().includes(S.query));
  const w = { name:(a,b)=>a.name.localeCompare(b.name), size:(a,b)=>(parseFloat(b.size)||0)-(parseFloat(a.size)||0),
    modified:(a,b)=>a.modified.localeCompare(b.modified) }[S.sort];
  out = [...out].sort(w);
  return [...out.filter(i => i.type === 'folder'), ...out.filter(i => i.type !== 'folder')];
}

/* ---------- item templates ---------- */
const kbd = `tabindex="0" role="button"`;
function cardTpl(it) {
  const k = kindOf(it);
  return `<article class="card-file" data-id="${it.id}" ${kbd} aria-label="${esc(it.name)}">
    <div class="row-actions">
      <button class="icon-btn" data-menu="${it.id}" aria-label="Actions for ${esc(it.name)}">${icon('more', 16)}</button>
    </div>
    <div class="fi ${k}">${icon(k, 20)}</div>
    <b>${esc(it.name)}</b>
    <span>${it.type === 'folder' ? `${it.count} items` : esc(it.size)} · ${esc(it.modified)}
    ${it.starred ? `<span class="star-on">${icon('star', 12)}</span>` : ''}</span>
  </article>`;
}
function rowTpl(it, actions) {
  const k = kindOf(it);
  return `<tr data-id="${it.id}">
    <td><div class="tname"><span class="fi ${k}">${icon(k, 18)}</span>
      <b>${esc(it.name)}</b>${it.starred ? `<span class="star-on">${icon('star', 13)}</span>` : ''}</div></td>
    <td class="muted">${it.type === 'folder' ? 'Folder' : ext(it.name).toUpperCase()}</td>
    <td class="muted">${esc(it.size)}</td>
    <td class="muted">${esc(it.modified)}</td>
    <td><div class="t-actions">${actions || `
      <button class="icon-btn" data-act="star" data-id="${it.id}" aria-label="Star ${esc(it.name)}">${icon('star', 16)}</button>
      <button class="icon-btn" data-act="download" data-id="${it.id}" aria-label="Download ${esc(it.name)}">${icon('download', 16)}</button>
      <button class="icon-btn" data-menu="${it.id}" aria-label="More actions for ${esc(it.name)}">${icon('more', 16)}</button>`}
    </div></td></tr>`;
}
const tableTpl = rows => `<div class="glass" style="padding:14px;overflow-x:auto"><table class="table">
  <thead><tr><th>Name</th><th>Type</th><th>Size</th><th>Modified</th><th></th></tr></thead>
  <tbody>${rows}</tbody></table></div>`;
const emptyTpl = (ic, title, body, action = '') => `<div class="empty"><span class="fi ${ic}">${icon(ic, 28)}</span>
  <h3>${title}</h3><p>${body}</p>${action}</div>`;

/* ---------- render ---------- */
function render() {
  const items = visible(S.items);
  const st = getStorageInfo();

  $$('[data-storage-used]').forEach(e => e.textContent = `${st.usedGB} GB / ${st.totalGB} GB`);
  $$('[data-storage-bar]').forEach(e => e.style.width = st.percent + '%');
  $$('[data-storage-pct]').forEach(e => e.textContent = st.percent + '%');
  const ring = $('#donut'); if (ring) ring.style.setProperty('--p', st.percent + '%');
  $$('[data-free]').forEach(e => e.textContent = `${st.freeGB} GB available`);
  const cnt = $('#statFiles'); if (cnt) cnt.textContent = '1,248 files';

  // recent (dashboard)
  const recent = S.items.filter(i => i.type !== 'folder').slice(0, 4);
  const rec = $('#recentBody');
  if (rec) rec.innerHTML = recent.length ? tableTpl(recent.map(i => rowTpl(i)).join('')) :
    emptyTpl('clock', 'No recent files', 'Files you open or change will show up here.');

  // my files
  const files = $('#filesBody');
  if (files) files.innerHTML = !items.length
    ? (S.query ? emptyTpl('search', 'No matches', `Nothing matches “${esc(S.query)}”. Try a shorter word.`)
               : emptyTpl('folder', 'This folder is empty', 'Upload a file or create a folder to get started.',
                 `<button class="btn btn-primary btn-sm" data-open="uploadModal" style="margin-top:10px">Upload files</button>`))
    : S.view === 'grid' ? `<div class="grid">${items.map(cardTpl).join('')}</div>`
                        : tableTpl(items.map(i => rowTpl(i)).join(''));
  $$('[data-view-toggle] button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === S.view)));

  // recent page grouped
  const groups = ['Today', 'Yesterday', 'Earlier this week', 'Older'];
  const rp = $('#recentPage');
  if (rp) {
    const f = items.filter(i => i.type !== 'folder');
    rp.innerHTML = f.length ? groups.map(g => {
      const rows = f.filter(i => (i.group || 'Older') === g);
      return rows.length ? `<h3 class="group-title">${g}</h3>${tableTpl(rows.map(i => rowTpl(i)).join(''))}` : '';
    }).join('') : emptyTpl('clock', 'Nothing recent', 'Open or edit a file and it will appear here.');
  }

  // starred
  const sp = $('#starredPage');
  if (sp) { const s = items.filter(i => i.starred);
    sp.innerHTML = s.length ? `<div class="grid">${s.map(cardTpl).join('')}</div>`
      : emptyTpl('star', 'Nothing starred yet', 'Star important files to find them quickly.'); }

  // trash
  const tp = $('#trashPage');
  if (tp) tp.innerHTML = S.trash.length
    ? tableTpl(S.trash.map(i => rowTpl(i, `
        <button class="btn btn-sm" data-act="restore" data-id="${i.id}">Restore</button>
        <button class="btn btn-sm btn-danger" data-act="purge" data-id="${i.id}">Delete forever</button>`)).join(''))
    : emptyTpl('trash', 'Trash is empty', 'Deleted files stay here for 30 days before they go for good.');

  // breakdown bars
  const bd = $('#breakdown');
  if (bd) bd.innerHTML = S.storage.breakdown.map(([n, gb, c]) => `<div class="bd-row">
    <div class="lbl"><span>${n}</span><span>${gb} GB</span></div>
    <div class="bar"><i style="width:${gb / S.storage.totalGB * 100}%;background:${c}"></i></div></div>`).join('');
}

/* ---------- preview ---------- */
function previewFile(id) {
  const it = byId(id); if (!it) return;
  if (it.type === 'folder') { showToast(`Opening folders needs the backend, which isn't connected yet.`, 'info', it.name); return; }
  const k = kindOf(it);
  const stage = k === 'image'
    ? `<div class="fi image lg">${icon('image', 30)}</div><p class="muted">Image previews load from storage once the backend is connected.</p>`
    : k === 'video' ? `<div class="play">${icon('play', 24)}</div><p class="muted">Video player placeholder</p>`
    : k === 'audio' ? `<div class="fi audio lg">${icon('audio', 28)}</div><p class="muted">Album player placeholder</p>
        <div class="bar" style="width:220px"><i style="width:34%"></i></div>`
    : it.text ? `<pre>${esc(it.text)}</pre>`
    : `<div class="fi ${k} lg">${icon(k, 28)}</div><p class="muted">No preview for this file type.</p>`;
  $('#previewTitle').textContent = it.name;
  $('#previewMeta').textContent = `${it.size} · ${it.modified}`;
  $('#previewStage').innerHTML = stage;
  $('#previewDownload').onclick = () => downloadFile(id);
  openModal('previewModal');
}

/* ---------- uploads (UI only — nothing is sent anywhere) ---------- */
function queueUpload(file) {
  const u = { id: 'u' + Math.random().toString(36).slice(2), name: file.name,
    size: (file.size / 1048576).toFixed(1) + ' MB', progress: 0, state: 'waiting' };
  S.uploads.push(u); renderQueue();
  showToast(`${file.name} is queued. It will upload once the backend is connected.`, 'info', 'Queued');
  return u;
}
function renderQueue() {
  const q = $('#uploadQueue'); if (!q) return;
  q.innerHTML = S.uploads.map(u => `<div class="q-item">
    <div class="q-top"><span class="fi ${kindOf(u)}" style="width:30px;height:30px;border-radius:9px">${icon(kindOf(u), 15)}</span>
      <b>${esc(u.name)}</b><span class="muted">${u.size}</span>
      <span class="q-actions">
        <button class="icon-btn" data-up="pause" data-id="${u.id}" aria-label="Pause">${icon('pause', 15)}</button>
        <button class="icon-btn" data-up="retry" data-id="${u.id}" aria-label="Retry">${icon('restore', 15)}</button>
        <button class="icon-btn" data-up="cancel" data-id="${u.id}" aria-label="Cancel">${icon('close', 15)}</button>
      </span></div>
    <div class="bar"><i style="width:${u.progress}%"></i></div>
    <span class="muted" style="font-size:12.5px">${u.state === 'waiting' ? 'Waiting for backend' : u.state} · ${u.progress}%</span>
  </div>`).join('') || `<p class="muted" style="font-size:13px">Nothing in the queue.</p>`;
}

/* ---------- events ---------- */
document.addEventListener('click', e => {
  const t = e.target;
  const open = t.closest('[data-open]'); if (open) { openModal(open.dataset.open); return; }
  const nav = t.closest('[data-section]');
  if (nav) { e.preventDefault(); go(nav.dataset.section); return; }
  const mb = t.closest('[data-menu]');
  if (mb) { e.stopPropagation(); const r = mb.getBoundingClientRect(); openMenu(r.left - 160, r.bottom + 6, mb.dataset.menu); return; }
  const drop = t.closest('[data-drop]');
  if (drop) { e.stopPropagation(); const d = $('#' + drop.dataset.drop); const h = d.hidden; closeMenu(); d.hidden = !h; return; }
  const act = t.closest('[data-act]');
  if (act) { runAction(act.dataset.act, act.dataset.id); return; }
  const up = t.closest('[data-up]');
  if (up) { const u = S.uploads.find(x => x.id === up.dataset.id);
    if (up.dataset.up === 'cancel') { S.uploads = S.uploads.filter(x => x.id !== u.id); showToast('Upload cancelled.', 'info'); }
    else { u.state = up.dataset.up === 'pause' ? 'paused' : 'waiting'; }
    renderQueue(); return; }
  const card = t.closest('.card-file, .table tbody tr');
  if (card && !t.closest('button')) previewFile(card.dataset.id);
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const c = e.target.closest?.('.card-file'); if (c) { e.preventDefault(); previewFile(c.dataset.id); }
});
document.addEventListener('contextmenu', e => {
  const c = e.target.closest('.card-file, .table tbody tr'); if (!c) return;
  e.preventDefault(); openMenu(e.clientX, e.clientY, c.dataset.id);
});
function runAction(act, id) {
  closeMenu();
  const it = byId(id);
  if (act === 'open') return previewFile(id);
  if (act === 'download') return downloadFile(id);
  if (act === 'star') return starFile(id);
  if (act === 'move') return moveFile(id);
  if (act === 'share') return pending('Sharing');
  if (act === 'restore') return restoreFile(id);
  if (act === 'purge') { S.trash = S.trash.filter(x => x.id !== id); render(); return showToast('File deleted permanently.', 'success', 'Deleted'); }
  if (act === 'rename') {
    const inp = $('#renameInput'); inp.value = it ? it.name : ''; $('#renameForm').dataset.id = id; return openModal('renameModal');
  }
  if (act === 'delete') { $('#confirmDelete').dataset.id = id; $('#confirmText').textContent =
    `${it ? it.name : 'This file'} moves to trash. You can restore it for 30 days.`; return openModal('confirmModal'); }
}
function go(section) {
  S.section = section;
  $$('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + section));
  $$('.side-nav a').forEach(a => a.classList.toggle('active', a.dataset.section === section));
  $('#sidebar')?.classList.remove('open'); $('#scrim')?.classList.remove('open');
  document.title = section[0].toUpperCase() + section.slice(1) + ' · ImiraZSite';
  render();
}

/* ---------- init ---------- */
function initTheme() {
  const apply = v => { document.documentElement.dataset.theme =
    v === 'system' ? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') : v; };
  apply(S.theme);
  $$('[data-theme-set]').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.themeSet === S.theme));
    b.addEventListener('click', () => { S.theme = b.dataset.themeSet; localStorage.setItem('imz.theme', S.theme);
      apply(S.theme); $$('[data-theme-set]').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.themeSet === S.theme)));
      showToast('Appearance updated.', 'success'); });
  });
}
function initDashboard() {
  // icons in static markup
  $$('[data-icon]').forEach(e => e.innerHTML = icon(e.dataset.icon, +e.dataset.size || 18));
  menuEl().innerHTML = ['open','download','rename','move','star','share'].map(a =>
    `<button data-act="${a}" data-id="">${icon({open:'eye',download:'download',rename:'edit',move:'move',star:'star',share:'share'}[a],16)}
      ${a[0].toUpperCase() + a.slice(1)}</button>`).join('') +
    `<hr><button class="danger" data-act="delete" data-id="">${icon('trash', 16)} Delete</button>`;
  menuEl().addEventListener('click', e => { const b = e.target.closest('button');
    if (b) runAction(b.dataset.act, menuEl().dataset.target); });

  $('#menuBtn')?.addEventListener('click', () => { $('#sidebar').classList.toggle('open'); $('#scrim').classList.toggle('open'); });
  $('#scrim')?.addEventListener('click', () => { $('#sidebar').classList.remove('open'); $('#scrim').classList.remove('open'); });
  $('#search')?.addEventListener('input', e => searchFiles(e.target.value));
  $('#sort')?.addEventListener('change', e => sortFiles(e.target.value));
  $$('[data-view-toggle] button').forEach(b => b.addEventListener('click', () => {
    S.view = b.dataset.mode; localStorage.setItem('imz.view', S.view); render(); }));
  $$('[data-logout]').forEach(b => b.addEventListener('click', logoutUser));

  $('#folderForm')?.addEventListener('submit', e => {
    e.preventDefault(); const i = $('#folderInput'), v = i.value.trim();
    const bad = !v || /[\\/:*?"<>|]/.test(v);
    i.classList.toggle('invalid', bad);
    $('#folderError').textContent = !v ? 'Give the folder a name.' : bad ? 'Avoid \\ / : * ? " < > |' : '';
    if (bad) return; closeModal('folderModal'); i.value = ''; createFolder(v);
  });
  $('#renameForm')?.addEventListener('submit', e => {
    e.preventDefault(); const v = $('#renameInput').value.trim(); if (!v) return;
    closeModal('renameModal'); renameFile(e.target.dataset.id, v);
  });
  $('#confirmDelete')?.addEventListener('click', e => { closeModal('confirmModal'); deleteFile(e.target.dataset.id); });
  $('#emptyTrashBtn')?.addEventListener('click', () => { $('#confirmText').textContent =
    'Everything in trash will be deleted permanently.'; $('#confirmDelete').dataset.id = 'ALL'; openModal('confirmModal'); });
  $('#confirmDelete')?.addEventListener('click', e => { if (e.target.dataset.id === 'ALL') {
    S.trash = []; render(); showToast('Trash is empty.', 'success', 'Emptied'); } });

  const dz = $('#dropzone'), picker = $('#filePicker');
  dz?.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('over'); });
  dz?.addEventListener('dragleave', () => dz.classList.remove('over'));
  dz?.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('over');
    [...e.dataTransfer.files].forEach(uploadFile); });
  dz?.addEventListener('click', () => picker.click());
  picker?.addEventListener('change', e => { [...e.target.files].forEach(uploadFile); e.target.value = ''; });

  $$('.switch').forEach(s => s.addEventListener('click', () =>
    s.setAttribute('aria-checked', s.getAttribute('aria-checked') === 'true' ? 'false' : 'true')));
  $$('[data-pending]').forEach(b => b.addEventListener('click', () => pending(b.dataset.pending)));

  $$('.skeleton').forEach(s => setTimeout(() => s.remove(), 550));
  setTimeout(() => { go('dashboard'); renderQueue(); }, 560);
  const h = new Date().getHours();
  const g = $('#greeting'); if (g) g.textContent = `Good ${h < 12 ? 'morning' : h < 18 ? 'afternoon' : 'evening'} 👋`;
}
function initLogin() {
  $$('[data-icon]').forEach(e => e.innerHTML = icon(e.dataset.icon, +e.dataset.size || 18));
  const pw = $('#password'), toggle = $('#togglePw');
  toggle?.addEventListener('click', () => {
    const on = pw.type === 'password'; pw.type = on ? 'text' : 'password';
    toggle.innerHTML = icon(on ? 'eyeoff' : 'eye', 17);
    toggle.setAttribute('aria-label', on ? 'Hide password' : 'Show password');
  });
  $('#loginForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const u = $('#username'), err = $('#loginError');
    if (!u.value.trim() || !pw.value) {
      u.classList.toggle('invalid', !u.value.trim()); pw.classList.toggle('invalid', !pw.value);
      err.textContent = 'Enter your username and password.'; return;
    }
    err.textContent = '';
    const res = await loginUser(u.value.trim(), pw.value, $('#remember').checked);
    if (!res.ok) showToast('Sign-in needs the backend, which isn\'t connected yet.', 'warning', 'No server');
  });
}
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  if ($('#loginForm')) initLogin();
  if ($('.app')) initDashboard();
  else $$('[data-icon]').forEach(e => e.innerHTML = icon(e.dataset.icon, +e.dataset.size || 18));
});
window.ImiraZSite = { loginUser, logoutUser, uploadFile, downloadFile, deleteFile, renameFile, moveFile,
  createFolder, starFile, restoreFile, searchFiles, sortFiles, previewFile, showToast, openModal, closeModal, getStorageInfo, state: S };
})();

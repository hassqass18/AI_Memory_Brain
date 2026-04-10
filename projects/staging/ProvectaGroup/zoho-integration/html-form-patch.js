/**
 * FORM PATCH — Replace placeholder functions in provecta-website.html
 *
 * 1. Replace submitAuditForm() with the version below
 * 2. Replace ambSubmitLead() with the version below
 * 3. Update ambShowResult() to fire the API call after scoring (see note)
 */


/* ─────────────────────────────────────────────
   PATCH 1: RevOps Audit Form
   Replaces: submitAuditForm() around line 2493
   ───────────────────────────────────────────── */
async function submitAuditForm() {
  const required = ['firstName', 'lastName', 'email', 'company'];
  let valid = true;

  required.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) { el.style.borderColor = '#F87171'; el.focus(); valid = false; }
    else el.style.borderColor = '';
  });

  const emailEl = document.getElementById('email');
  if (valid && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
    emailEl.style.borderColor = '#F87171'; emailEl.focus(); valid = false;
  }

  if (!valid) return;

  // Show loading state
  const btn = document.querySelector('.form-submit');
  btn.textContent = 'Submitting…';
  btn.disabled = true;

  try {
    await fetch('/api/revops-audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: document.getElementById('firstName').value.trim(),
        lastName:  document.getElementById('lastName').value.trim(),
        email:     document.getElementById('email').value.trim(),
        company:   document.getElementById('company').value.trim(),
        role:      document.getElementById('role').value,
        crm:       document.getElementById('crm').value,
        challenge: document.getElementById('challenge').value.trim(),
      }),
    });
  } catch (e) {
    console.warn('CRM submission error — showing success anyway', e);
  }

  document.getElementById('auditForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}


/* ─────────────────────────────────────────────
   PATCH 2: AI Audit Lead Capture
   Replaces: ambSubmitLead() around line 3262
   ───────────────────────────────────────────── */
function ambSubmitLead(e) {
  e.preventDefault();
  ambAnswers._lead = {
    first:   document.getElementById('amb-first').value,
    last:    document.getElementById('amb-last').value,
    email:   document.getElementById('amb-email').value,
    company: document.getElementById('amb-company').value,
    role:    document.getElementById('amb-role').value,
  };
  // Move to quiz — CRM call fires AFTER scoring in ambShowResult()
  document.getElementById('amb-step-lead').style.display = 'none';
  document.getElementById('amb-step-quiz').style.display = 'block';
  ambUpdateProgress(0);
}


/* ─────────────────────────────────────────────
   PATCH 3: Fire CRM call inside ambShowResult()
   Add these lines INSIDE ambShowResult(), after `const score = ambCalcScore();`
   ───────────────────────────────────────────── */

// --- INSERT AFTER: const score = ambCalcScore(); ---
fetch('/api/ai-audit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    first:   ambAnswers._lead.first,
    last:    ambAnswers._lead.last,
    email:   ambAnswers._lead.email,
    company: ambAnswers._lead.company,
    role:    ambAnswers._lead.role,
    answers: ambAnswers,
    score:   score,
  }),
}).catch(e => console.warn('AI audit CRM error', e));
// --- END INSERT ---

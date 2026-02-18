import"./style-523V8lMA.js";const Ne="simplifyn_data";function Xe(){try{return JSON.parse(localStorage.getItem(Ne))||Se()}catch{return Se()}}function O(e){localStorage.setItem(Ne,JSON.stringify(e))}function Se(){return{income:[],investments:[],loans:[],insurance:[],expenses:[],goals:[],family:[]}}let a=Xe();const qe="simplifyn_profile",Pe={currentAge:30,retirementAge:60,lifeExpectancy:85,inflation:6,preReturnRate:12,postReturnRate:7};function z(){try{return{...Pe,...JSON.parse(localStorage.getItem(qe))}}catch{return{...Pe}}}function Ye(){const e={currentAge:parseInt(document.getElementById("profileCurrentAge")?.value)||30,retirementAge:parseInt(document.getElementById("profileRetirementAge")?.value)||60,lifeExpectancy:parseInt(document.getElementById("profileLifeExpectancy")?.value)||85,inflation:parseFloat(document.getElementById("profileInflation")?.value)||6,preReturnRate:parseFloat(document.getElementById("profilePreReturnRate")?.value)||12,postReturnRate:parseFloat(document.getElementById("profilePostReturnRate")?.value)||7};localStorage.setItem(qe,JSON.stringify(e)),q(),R("Profile updated!")}window.saveProfile=Ye;function Ue(){const e=z(),t=(n,o)=>{const i=document.getElementById(n);i&&(i.value=o)};t("profileCurrentAge",e.currentAge),t("profileRetirementAge",e.retirementAge),t("profileLifeExpectancy",e.lifeExpectancy),t("profileInflation",e.inflation),t("profilePreReturnRate",e.preReturnRate),t("profilePostReturnRate",e.postReturnRate)}function W(e,t,n){return n<=0||t<0?e:e*Math.pow(1+t,n)}function U(e,t,n){if(n<=0||!e)return 0;if(t<=0)return e*n*12;const o=t/12,i=n*12;return e*((Math.pow(1+o,i)-1)/o)}function Je(e,t,n,o){return o<=0||e<=0?0:t<=0&&n<=0?e*o:Math.abs(t-n)<.001?e*o/(1+t):e/(t-n)*(1-Math.pow((1+n)/(1+t),o))}function J(){const e=z(),t=Math.max(0,e.retirementAge-e.currentAge),n=Math.max(0,e.lifeExpectancy-e.retirementAge),o=e.inflation/100,i=e.preReturnRate/100,d=e.postReturnRate/100,b=a.income.reduce((g,x)=>g+x.amount,0),F=a.expenses.reduce((g,x)=>g+x.amount,0),c=a.loans.reduce((g,x)=>g+x.amount,0),p=a.investments.reduce((g,x)=>g+x.amount,0);let l=0;a.investments.forEach(g=>{const x=g.expectedReturn?g.expectedReturn/100:i;l+=W(g.amount,x,t),l+=U(g.sip||0,x,t)});const u=F*12*Math.pow(1+o,t),h=Je(u,d,o,n),v=l-h,B=h>0?Math.min(100,Math.round(l/h*100)):l>0?100:0,S=b-F,E=p-c,$=u/12,L=a.investments.reduce((g,x)=>g+(x.sip||0),0);return{profile:e,yearsToRetirement:t,postRetirementYears:n,inflationRate:o,preReturnRate:i,postReturnRate:d,totalIncome:b,totalExpenses:F,totalLiabilities:c,totalCurrentAssets:p,totalSIP:L,projectedCorpus:Math.round(l),requiredCorpus:Math.round(h),annualExpensesAtRetirement:Math.round(u),monthlyExpensesAtRetirement:Math.round($),surplus:Math.round(v),readiness:B,monthlySurplus:S,netWorth:E}}function s(e){return e==null||isNaN(e)?"₹0":"₹"+Number(e).toLocaleString("en-IN")}function X(){return Date.now().toString(36)+Math.random().toString(36).substr(2,5)}const Fe=document.getElementById("sidebar"),Ae=document.getElementById("sidebarCollapseBtn"),Le=document.getElementById("sidebarToggleMobile"),re=document.getElementById("sidebarOverlay"),je=document.querySelectorAll(".sidebar-link"),We=document.querySelectorAll(".page"),Te=document.querySelector(".mobile-page-title"),ie=document.getElementById("modalOverlay"),Ke=document.getElementById("modalTitle"),De=document.getElementById("modalBody"),Qe=document.getElementById("modalClose"),Ze=document.getElementById("modalCancel"),et=document.getElementById("modalSave"),tt=document.getElementById("toastContainer");Ae&&Ae.addEventListener("click",()=>Fe.classList.toggle("collapsed"));function nt(){Fe.classList.add("open"),re.classList.add("visible"),document.body.style.overflow="hidden"}function $e(){Fe.classList.remove("open"),re.classList.remove("visible"),document.body.style.overflow=""}Le&&Le.addEventListener("click",nt);re&&re.addEventListener("click",$e);function ze(e){je.forEach(n=>n.classList.toggle("active",n.dataset.page===e)),We.forEach(n=>{const o=n.id.replace("page-","");n.classList.toggle("active",o===e)});const t=document.querySelector(`.sidebar-link[data-page="${e}"]`);t&&Te&&(Te.textContent=t.querySelector("span").textContent),$e()}je.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),e.dataset.page&&ze(e.dataset.page)})});let le=null;function Oe(e,t,n){Ke.textContent=e,De.innerHTML=t,le=n,ie.classList.add("open"),setTimeout(()=>{const o=De.querySelector("input, select");o&&o.focus()},100)}function j(){ie.classList.remove("open"),le=null}Qe.addEventListener("click",j);Ze.addEventListener("click",j);ie.addEventListener("click",e=>{e.target===ie&&j()});et.addEventListener("click",()=>{le&&le()});document.addEventListener("keydown",e=>{e.key==="Escape"&&(j(),$e())});function R(e,t="success"){const n=document.createElement("div");n.className=`toast ${t}`,n.textContent=e,tt.appendChild(n),setTimeout(()=>n.remove(),3e3)}const He={income:{title:"Add Income",fields:`
      <div class="form-group">
        <label class="form-label">Source Name</label>
        <input class="form-input" id="f-name" placeholder="e.g. Salary, Freelancing, Rent" required />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Monthly Amount (₹)</label>
          <input class="form-input" id="f-amount" type="number" placeholder="50000" required />
        </div>
        <div class="form-group">
          <label class="form-label">Type</label>
          <select class="form-select" id="f-type">
            <option value="Salary">Salary</option>
            <option value="Business">Business</option>
            <option value="Rental">Rental</option>
            <option value="Freelance">Freelance</option>
            <option value="Dividend">Dividend</option>
            <option value="Pension">Pension</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    `,save(){const e=document.getElementById("f-name").value.trim(),t=parseFloat(document.getElementById("f-amount").value),n=document.getElementById("f-type").value;if(!e||isNaN(t))return R("Please fill all fields","error");a.income.push({id:X(),name:e,amount:t,type:n}),O(a),j(),ce(),q(),R("Income source added!")}},investments:{title:"Add Investment",fields:`
      <div class="form-group">
        <label class="form-label">Investment Name</label>
        <input class="form-input" id="f-name" placeholder="e.g. HDFC Mid Cap, SBI FD" required />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Current Value (₹)</label>
          <input class="form-input" id="f-amount" type="number" placeholder="100000" required />
        </div>
        <div class="form-group">
          <label class="form-label">Category</label>
          <select class="form-select" id="f-type">
            <option value="Mutual Funds">Mutual Funds</option>
            <option value="Stocks">Stocks</option>
            <option value="Fixed Deposits">Fixed Deposits</option>
            <option value="Savings Account">Savings Account</option>
            <option value="PPF / EPF">PPF / EPF</option>
            <option value="NPS">NPS</option>
            <option value="SSY">Sukanya Samriddhi Yojana</option>
            <option value="Gold">Gold</option>
            <option value="Insurance (LIC)">Insurance (LIC etc.)</option>
            <option value="Pension Plan">Pension Plan</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Monthly SIP (₹, optional)</label>
          <input class="form-input" id="f-sip" type="number" placeholder="5000" />
        </div>
        <div class="form-group">
          <label class="form-label">Expected Return (% p.a.)</label>
          <input class="form-input" id="f-return" type="number" step="0.1" placeholder="12" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Asset Class</label>
          <select class="form-select" id="f-assetclass">
            <option value="Equity">Equity</option>
            <option value="Debt">Debt</option>
            <option value="Gold">Gold</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group" style="display:flex;align-items:flex-end;padding-bottom:4px">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:var(--text-secondary)">
            <input type="checkbox" id="f-emergency" style="width:16px;height:16px;accent-color:#4F46E5" />
            🛡️ Emergency Fund
          </label>
        </div>
      </div>
    `,save(){const e=document.getElementById("f-name").value.trim(),t=parseFloat(document.getElementById("f-amount").value),n=document.getElementById("f-type").value,o=parseFloat(document.getElementById("f-sip").value)||0,i=parseFloat(document.getElementById("f-return").value)||0,d=document.getElementById("f-emergency")?.checked||!1,b=document.getElementById("f-assetclass").value;if(!e||isNaN(t))return R("Please fill required fields","error");a.investments.push({id:X(),name:e,amount:t,type:n,sip:o,expectedReturn:i,isEmergencyFund:d,assetClass:b}),O(a),j(),pe(),q(),R("Investment added!")}},loans:{title:"Add Loan",fields:`
      <div class="form-group">
        <label class="form-label">Loan Name</label>
        <input class="form-input" id="f-name" placeholder="e.g. Home Loan, Car Loan" required />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Outstanding Amount (₹)</label>
          <input class="form-input" id="f-amount" type="number" placeholder="2000000" required />
        </div>
        <div class="form-group">
          <label class="form-label">Monthly EMI (₹)</label>
          <input class="form-input" id="f-emi" type="number" placeholder="20000" required />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Interest Rate (%)</label>
          <input class="form-input" id="f-rate" type="number" step="0.1" placeholder="8.5" />
        </div>
        <div class="form-group">
          <label class="form-label">Type</label>
          <select class="form-select" id="f-type">
            <option value="Home Loan">Home Loan</option>
            <option value="Car Loan">Car Loan</option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Education Loan">Education Loan</option>
            <option value="Gold Loan">Gold Loan</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    `,save(){const e=document.getElementById("f-name").value.trim(),t=parseFloat(document.getElementById("f-amount").value),n=parseFloat(document.getElementById("f-emi").value),o=parseFloat(document.getElementById("f-rate").value)||0,i=document.getElementById("f-type").value;if(!e||isNaN(t)||isNaN(n))return R("Please fill required fields","error");a.loans.push({id:X(),name:e,amount:t,emi:n,rate:o,type:i}),O(a),j(),ue(),q(),R("Loan added!")}},insurance:{title:"Add Insurance Policy",fields:`
      <div class="form-group">
        <label class="form-label">Policy Name / Company</label>
        <input class="form-input" id="f-name" placeholder="e.g. Star Health Family Floater" required />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Cover Amount (₹)</label>
          <input class="form-input" id="f-amount" type="number" placeholder="500000" required />
        </div>
        <div class="form-group">
          <label class="form-label">Annual Premium (₹)</label>
          <input class="form-input" id="f-premium" type="number" placeholder="15000" required />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-select" id="f-type">
          <option value="Health">Health Insurance</option>
          <option value="Term">Term Life Insurance</option>
          <option value="Vehicle">Vehicle Insurance</option>
          <option value="Other">Other</option>
        </select>
      </div>
    `,save(){const e=document.getElementById("f-name").value.trim(),t=parseFloat(document.getElementById("f-amount").value),n=parseFloat(document.getElementById("f-premium").value),o=document.getElementById("f-type").value;if(!e||isNaN(t)||isNaN(n))return R("Please fill required fields","error");a.insurance.push({id:X(),name:e,amount:t,premium:n,type:o}),O(a),j(),me(),q(),R("Insurance policy added!")}},expenses:{title:"Add Expense",fields:`
      <div class="form-group">
        <label class="form-label">Category</label>
        <input class="form-input" id="f-name" placeholder="e.g. Rent, Groceries, EMI" required />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Monthly Amount (₹)</label>
          <input class="form-input" id="f-amount" type="number" placeholder="15000" required />
        </div>
        <div class="form-group">
          <label class="form-label">Type</label>
          <select class="form-select" id="f-type">
            <option value="Essential">Essential</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="EMI">EMI</option>
            <option value="Subscription">Subscription</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    `,save(){const e=document.getElementById("f-name").value.trim(),t=parseFloat(document.getElementById("f-amount").value),n=document.getElementById("f-type").value;if(!e||isNaN(t))return R("Please fill all fields","error");a.expenses.push({id:X(),name:e,amount:t,type:n}),O(a),j(),ge(),q(),R("Expense added!")}},goals:{title:"Add Financial Goal",fields:`
      <div class="form-group">
        <label class="form-label">Goal Name</label>
        <input class="form-input" id="f-name" placeholder="e.g. Buy House, Child Education" required />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Target Amount (₹)</label>
          <input class="form-input" id="f-amount" type="number" placeholder="5000000" required />
        </div>
        <div class="form-group">
          <label class="form-label">Target Year</label>
          <input class="form-input" id="f-year" type="number" placeholder="2030" required />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Current Savings Towards Goal (₹)</label>
        <input class="form-input" id="f-saved" type="number" placeholder="500000" />
      </div>
    `,save(){const e=document.getElementById("f-name").value.trim(),t=parseFloat(document.getElementById("f-amount").value),n=parseInt(document.getElementById("f-year").value),o=parseFloat(document.getElementById("f-saved").value)||0;if(!e||isNaN(t)||isNaN(n))return R("Please fill required fields","error");a.goals.push({id:X(),name:e,amount:t,year:n,saved:o}),O(a),j(),ye(),q(),R("Goal added!")}},family:{title:"Add Family Member",fields:`
      <div class="form-group">
        <label class="form-label">Name</label>
        <input class="form-input" id="f-name" placeholder="Full name" required />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Relationship</label>
          <select class="form-select" id="f-type">
            <option value="Spouse">Spouse</option>
            <option value="Child">Child</option>
            <option value="Parent">Parent</option>
            <option value="Sibling">Sibling</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Age</label>
          <input class="form-input" id="f-age" type="number" placeholder="30" required />
        </div>
      </div>
    `,save(){const e=document.getElementById("f-name").value.trim(),t=document.getElementById("f-type").value,n=parseInt(document.getElementById("f-age").value);if(!e||isNaN(n))return R("Please fill all fields","error");a.family.push({id:X(),name:e,type:t,age:n}),O(a),j(),fe(),q(),R("Family member added!")}}},de={income:()=>ce(),investments:()=>pe(),loans:()=>ue(),insurance:()=>me(),expenses:()=>ge(),goals:()=>ye(),family:()=>fe()};function ot(e,t){a[e]=a[e].filter(n=>n.id!==t),O(a),de[e]&&de[e](),q(),R("Item removed")}function st(e,t){const n=a[e].find(i=>i.id===t);if(!n)return;const o=He[e];o&&(Oe("Edit "+o.title.replace("Add ",""),o.fields,()=>{const i=at(e);i&&(Object.assign(n,i),O(a),j(),de[e]&&de[e](),q(),R("Updated successfully!"))}),setTimeout(()=>rt(e,n),50))}function at(e){const t=document.getElementById("f-name")?.value.trim(),n=parseFloat(document.getElementById("f-amount")?.value),o=document.getElementById("f-type")?.value;switch(e){case"income":return!t||isNaN(n)?(R("Please fill all fields","error"),null):{name:t,amount:n,type:o};case"investments":{const i=parseFloat(document.getElementById("f-sip")?.value)||0,d=parseFloat(document.getElementById("f-return")?.value)||0,b=document.getElementById("f-emergency")?.checked||!1,F=document.getElementById("f-assetclass")?.value||"Other";return!t||isNaN(n)?(R("Please fill required fields","error"),null):{name:t,amount:n,type:o,sip:i,expectedReturn:d,isEmergencyFund:b,assetClass:F}}case"loans":{const i=parseFloat(document.getElementById("f-emi")?.value),d=parseFloat(document.getElementById("f-rate")?.value)||0;return!t||isNaN(n)||isNaN(i)?(R("Please fill required fields","error"),null):{name:t,amount:n,emi:i,rate:d,type:o}}case"insurance":{const i=parseFloat(document.getElementById("f-premium")?.value);return!t||isNaN(n)||isNaN(i)?(R("Please fill required fields","error"),null):{name:t,amount:n,premium:i,type:o}}case"expenses":return!t||isNaN(n)?(R("Please fill all fields","error"),null):{name:t,amount:n,type:o};case"goals":{const i=parseInt(document.getElementById("f-year")?.value),d=parseFloat(document.getElementById("f-saved")?.value)||0;return!t||isNaN(n)||isNaN(i)?(R("Please fill required fields","error"),null):{name:t,amount:n,year:i,saved:d}}case"family":{const i=parseInt(document.getElementById("f-age")?.value);return!t||isNaN(i)?(R("Please fill all fields","error"),null):{name:t,type:o,age:i}}default:return null}}function rt(e,t){const n=(o,i)=>{const d=document.getElementById(o);d&&i!==void 0&&(d.value=i)};if(n("f-name",t.name),n("f-amount",t.amount),n("f-type",t.type),e==="investments"){n("f-sip",t.sip),n("f-return",t.expectedReturn),n("f-assetclass",t.assetClass);const o=document.getElementById("f-emergency");o&&(o.checked=!!t.isEmergencyFund)}e==="loans"&&(n("f-emi",t.emi),n("f-rate",t.rate)),e==="insurance"&&n("f-premium",t.premium),e==="goals"&&(n("f-year",t.year),n("f-saved",t.saved)),e==="family"&&n("f-age",t.age)}window.deleteItem=ot;window.editItem=st;function K(e,t,n){return e.length?`<div class="data-list">${e.map(o=>{const{label:i,detail:d,amount:b}=n(o);return`
      <div class="data-item">
        <div class="data-item-info">
          <span class="data-item-name">${i}</span>
          <span class="data-item-detail">${d}</span>
        </div>
        <div class="data-item-actions">
          <span class="data-item-amount">${b}</span>
          <button class="data-item-delete" onclick="editItem('${t}','${o.id}')" title="Edit" style="color:var(--primary)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="data-item-delete" onclick="deleteItem('${t}','${o.id}')" title="Delete">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>`}).join("")}</div>`:""}function ce(){const e=document.getElementById("page-income"),t=K(a.income,"income",i=>({label:i.name,detail:i.type,amount:s(i.amount)+"/mo"})),n=a.income.reduce((i,d)=>i+d.amount,0),o=a.income.length>0;e.innerHTML=`
    <div class="page-header">
      <div>
        <h1 class="page-title">Income</h1>
        <p class="page-subtitle">Track and manage your income sources${o?" • Total: "+s(n)+"/mo":""}</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('income')">+ Add Income</button>
    </div>
    ${o?'<div style="background:#F0F9FF;border:1px solid #BAE6FD;border-radius:8px;padding:10px 14px;margin-bottom:16px;font-size:13px;color:#0369A1">💡 Your income is used for retirement projections, insurance HLV calculations, and monthly surplus analysis.</div>':""}
    ${t}
    ${o?"":`<div class="empty-state">
      <div class="empty-icon">💰</div>
      <h3>No income sources added</h3>
      <p>Add your salary, rental income, freelance earnings, and other income sources to get a complete picture.</p>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('income')">+ Add Your First Income</button>
    </div>`}`}function pe(){const e=document.getElementById("page-investments"),t=a.investments.reduce((l,u)=>l+u.amount,0),n=a.investments.length>0,o={"Mutual Funds":"MF",Stocks:"ST","Fixed Deposits":"FD","Savings Account":"SA","PPF / EPF":"PPF",NPS:"NPS",SSY:"SSY",Gold:"GL","Insurance (LIC)":"LIC","Pension Plan":"PP","Real Estate":"RE",Other:"OT"},i={"Mutual Funds":["#EEF2FF","#4F46E5"],Stocks:["#ECFDF5","#10B981"],"Fixed Deposits":["#FEF3C7","#D97706"],"Savings Account":["#E0F2FE","#0284C7"],"PPF / EPF":["#FDF2F8","#DB2777"],NPS:["#FEF2F2","#EF4444"],SSY:["#FCE7F3","#BE185D"],Gold:["#F0FDF4","#16A34A"],"Insurance (LIC)":["#FFF7ED","#EA580C"],"Pension Plan":["#F5F3FF","#7C3AED"],"Real Estate":["#EFF6FF","#2563EB"],Other:["#F8FAFC","#64748B"]},d={};a.investments.forEach(l=>{d[l.type]||(d[l.type]=[]),d[l.type].push(l)});const b='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',F='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',p=Object.keys(o).filter(l=>d[l]&&d[l].length>0).map(l=>{const u=d[l],h=u.reduce((E,$)=>E+$.amount,0),v=(i[l]||i.Other)[0],B=(i[l]||i.Other)[1],S=u.map(E=>{const $=(E.expectedReturn?E.expectedReturn+"% p.a.":"")+(E.sip?" • SIP: "+s(E.sip)+"/mo":"")+(E.isEmergencyFund?" • 🛡️ Emergency Fund":"");return`
        <div class="data-item">
          <div class="data-item-info">
            <span class="data-item-name">${E.name}${E.isEmergencyFund?" 🛡️":""}</span>
            <span class="data-item-detail">${$}</span>
          </div>
          <div class="data-item-actions">
            <span class="data-item-amount">${s(E.amount)}</span>
            <button class="data-item-delete" onclick="editItem('investments','${E.id}')" title="Edit" style="color:var(--primary)">${b}</button>
            <button class="data-item-delete" onclick="deleteItem('investments','${E.id}')" title="Delete">${F}</button>
          </div>
        </div>`}).join("");return`
      <div class="inv-group collapsed">
        <div class="inv-group-header" onclick="this.parentElement.classList.toggle('collapsed')" style="cursor:pointer">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="inv-cat-icon" style="background:${v};color:${B}">${o[l]}</div>
            <div>
              <div style="font-weight:600;font-size:14px;color:var(--text-primary)">${l}</div>
              <div style="font-size:12px;color:var(--text-tertiary)">${u.length} item${u.length>1?"s":""}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-weight:700;font-size:15px;color:${B}">${s(h)}</span>
            <svg class="inv-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
        <div class="inv-group-body"><div class="data-list">${S}</div></div>
      </div>`}).join("");e.innerHTML=`
    <div class="page-header">
      <div>
        <h1 class="page-title">Investments</h1>
        <p class="page-subtitle">Track all your investments${n?" • Total: "+s(t):""}</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('investments')">+ Add Investment</button>
    </div>
    ${p}
    ${n?(()=>{const l={"Mutual Funds":"Equity",Stocks:"Equity",NPS:"Equity","Fixed Deposits":"Debt","Savings Account":"Debt","PPF / EPF":"Debt",SSY:"Debt","Insurance (LIC)":"Debt","Pension Plan":"Equity",Gold:"Gold","Real Estate":"Real Estate",Other:"Other"},u={Equity:0,Debt:0,Gold:0,"Real Estate":0,Other:0};a.investments.forEach(w=>{const P=w.assetClass||l[w.type]||"Other";u[P]=(u[P]||0)+w.amount});const h=Object.values(u).reduce((w,P)=>w+P,0),v=w=>h>0?Math.round(w/h*100):0,B={Equity:"#4F46E5",Debt:"#10B981",Gold:"#F59E0B","Real Estate":"#3B82F6",Other:"#94A3B8"},E=z().currentAge||30,$=Math.max(20,Math.min(80,100-E)),L=Math.max(10,100-$-10-5),f={Equity:$,Debt:L,Gold:10,"Real Estate":5},y=["Equity","Debt","Gold","Real Estate","Other"].filter(w=>v(u[w])>0).map(w=>`<div style="width:${v(u[w])}%;background:${B[w]};height:100%;border-radius:${w==="Equity"?"6px 0 0 6px":"0"};transition:width 0.5s ease" title="${w}: ${v(u[w])}%"></div>`).join(""),r=[],C=v(u.Equity),T=v(u.Debt);C<$-10?r.push({type:"warning",text:`Equity is ${C}% vs ideal ${$}% for age ${E}. Consider increasing via index funds or diversified MFs.`}):C>$+15&&r.push({type:"warning",text:`Equity at ${C}% is high for age ${E} (ideal ~${$}%). Consider rebalancing some equity into debt.`}),T<15&&h>0&&r.push({type:"info",text:`Debt allocation is only ${T}%. Some fixed-income exposure (FDs, PPF, debt funds) provides stability.`}),v(u.Gold)===0&&h>0&&r.push({type:"info",text:"No gold allocation. 5-10% in gold acts as an inflation hedge and portfolio diversifier."}),r.length===0&&h>0&&r.push({type:"success",text:"Your asset allocation looks well-balanced for your age. Keep reviewing annually."});const G={warning:{bg:"#FFFBEB",border:"#FDE68A",text:"#92400E",icon:"⚠️"},info:{bg:"#F0F9FF",border:"#BAE6FD",text:"#0369A1",icon:"💡"},success:{bg:"#F0FDF4",border:"#BBF7D0",text:"#166534",icon:"✅"}},N=r.map(w=>{const P=G[w.type];return`<div style="background:${P.bg};border:1px solid ${P.border};border-radius:8px;padding:10px 14px;margin-bottom:6px;font-size:13px;color:${P.text}">${P.icon} ${w.text}</div>`}).join("");return`
      <div style="background:white;border:1px solid rgba(226,232,240,0.6);border-radius:var(--radius-lg);padding:24px;margin-bottom:16px;box-shadow:0 1px 3px rgba(0,0,0,0.04)">
        <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;color:var(--text-primary)">📊 Asset Allocation</h3>
        <div style="display:flex;height:28px;border-radius:6px;overflow:hidden;margin-bottom:16px;background:#F1F5F9">${y}</div>
        <div style="display:grid;grid-template-columns:repeat(${Object.keys(u).filter(w=>u[w]>0).length}, 1fr);gap:12px;margin-bottom:16px">
          ${["Equity","Debt","Gold","Real Estate","Other"].filter(w=>u[w]>0).map(w=>`
            <div style="text-align:center">
              <div style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${B[w]};margin-right:4px"></div>
              <span style="font-size:12px;font-weight:600;color:var(--text-secondary)">${w}</span>
              <div style="font-size:20px;font-weight:800;color:var(--text-primary);margin-top:4px">${v(u[w])}%</div>
              <div style="font-size:11px;color:var(--text-tertiary)">${s(u[w])}</div>
              ${f[w]!==void 0?`<div style="font-size:10px;color:${Math.abs(v(u[w])-f[w])>10?"#F59E0B":"#10B981"};margin-top:2px">Ideal: ~${f[w]}%</div>`:""}
            </div>`).join("")}
        </div>
        <div style="margin-bottom:4px">${N}</div>
        <div style="font-size:11px;color:var(--text-tertiary);text-align:center">Based on age ${E} using the "100 minus age" equity allocation rule • MFs & Stocks classified as Equity, FDs/PPF/EPF as Debt</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:white;border:1px solid rgba(226,232,240,0.6);border-radius:var(--radius-md);margin-bottom:16px;box-shadow:0 1px 3px rgba(0,0,0,0.04)">
        <span style="font-weight:800;font-size:16px;color:var(--text-primary)">Total Investments</span>
        <span style="font-weight:800;font-size:18px;color:var(--primary)">${s(t)}</span>
      </div>`})():""}
    ${n?"":`<div class="empty-state">
      <div class="empty-icon">📈</div>
      <h3>Start tracking your investments</h3>
      <p>Add your mutual funds, stocks, FDs, PPF, NPS, and other investments to see your complete portfolio.</p>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('investments')">+ Add Investment</button>
    </div>`}`}function ue(){const e=document.getElementById("page-loans"),t=K(a.loans,"loans",o=>({label:o.name,detail:o.type+" • "+o.rate+"% p.a. • EMI: "+s(o.emi),amount:s(o.amount)})),n=a.loans.length>0;e.innerHTML=`
    <div class="page-header">
      <div>
        <h1 class="page-title">Loans</h1>
        <p class="page-subtitle">Manage your outstanding loans and EMIs</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('loans')">+ Add Loan</button>
    </div>
    ${t}
    ${n?"":`<div class="empty-state">
      <div class="empty-icon">🏠</div>
      <h3>No loans added</h3>
      <p>Add your home loan, car loan, personal loan, or education loan to track your liabilities and plan repayments.</p>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('loans')">+ Add Your First Loan</button>
    </div>`}`}function me(){const e=document.getElementById("page-insurance"),t=K(a.insurance,"insurance",d=>({label:d.name,detail:d.type+" • Premium: "+s(d.premium)+"/yr",amount:s(d.amount)})),n=a.insurance.length>0,o=a.insurance.reduce((d,b)=>d+b.amount,0),i=a.insurance.reduce((d,b)=>d+b.premium,0);e.innerHTML=`
    <div class="page-header">
      <div>
        <h1 class="page-title">Insurance</h1>
        <p class="page-subtitle">Track all your insurance policies${n?" • "+a.insurance.length+" policies":""}</p>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-outline btn-sm" onclick="navigateToPage('insurance-advisor')">📊 Advisor</button>
        <button class="btn btn-primary btn-sm" onclick="openFormModal('insurance')">+ Add Policy</button>
      </div>
    </div>
    ${n?`<div class="expense-summary-cards">
      <div class="exp-summary-card"><span class="exp-label">Total Cover</span><span class="exp-value">${s(o)}</span></div>
      <div class="exp-summary-card"><span class="exp-label">Annual Premium</span><span class="exp-value">${s(i)}</span></div>
      <div class="exp-summary-card"><span class="exp-label">Policies</span><span class="exp-value">${a.insurance.length}</span></div>
    </div>`:""}
    ${t}
    ${n?"":`<div class="empty-state">
      <div class="empty-icon">🛡️</div>
      <h3>No insurance policies added</h3>
      <p>Add your health and term life insurance policies to track your coverage.</p>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('insurance')">+ Add Your First Policy</button>
    </div>`}`}function ge(){const e=document.getElementById("page-expenses"),t=K(a.expenses,"expenses",i=>({label:i.name,detail:i.type,amount:s(i.amount)+"/mo"})),n=a.expenses.reduce((i,d)=>i+d.amount,0),o=a.expenses.length>0;e.innerHTML=`
    <div class="page-header">
      <div>
        <h1 class="page-title">Expenses</h1>
        <p class="page-subtitle">Track your monthly spending</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('expenses')">+ Add Expense</button>
    </div>
    <div class="expense-summary-cards">
      <div class="exp-summary-card"><span class="exp-label">Monthly Expenses</span><span class="exp-value">${s(n)}</span></div>
      <div class="exp-summary-card"><span class="exp-label">Annual Expenses</span><span class="exp-value">${s(n*12)}</span></div>
      <div class="exp-summary-card"><span class="exp-label">Categories</span><span class="exp-value">${a.expenses.length}</span></div>
    </div>
    ${o?'<div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;padding:10px 14px;margin-bottom:16px;font-size:13px;color:#92400E">💡 Expenses drive your retirement corpus calculation and emergency fund target (6× monthly expenses).</div>':""}
    ${t}
    ${o?"":`<div class="empty-state">
      <div class="empty-icon">📊</div>
      <h3>No expenses tracked yet</h3>
      <p>Add your monthly expenses like rent, groceries, utilities, EMIs, and subscriptions to understand your spending.</p>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('expenses')">+ Add Expense Category</button>
    </div>`}`}function ye(){const e=document.getElementById("page-goals"),t=a.goals.length>0,n=K(a.goals,"goals",o=>{const i=o.amount>0?Math.round(o.saved/o.amount*100):0;return{label:o.name,detail:`Target: ${o.year} • Saved: ${s(o.saved)} (${i}%)`,amount:s(o.amount)}});e.innerHTML=`
    <div class="page-header">
      <div>
        <h1 class="page-title">Goals</h1>
        <p class="page-subtitle">Set and track your financial goals</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('goals')">+ Add Goal</button>
    </div>
    ${t?'<div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:10px 14px;margin-bottom:16px;font-size:13px;color:#166534">💡 Goals are factored into your insurance Human Life Value — larger goals increase recommended cover.</div>':""}
    ${n}
    ${t?"":`<div class="empty-state">
      <div class="empty-icon">🎯</div>
      <h3>No goals set yet</h3>
      <p>Create financial goals like buying a house, children's education, vacation fund, or any custom goal.</p>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('goals')">+ Create Your First Goal</button>
    </div>`}`}function fe(){const e=document.getElementById("page-family"),t=a.family.length>0,n=K(a.family,"family",o=>({label:o.name,detail:o.type+" • Age "+o.age,amount:""}));e.innerHTML=`
    <div class="page-header">
      <div>
        <h1 class="page-title">Family</h1>
        <p class="page-subtitle">Manage family member details for insurance and planning</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('family')">+ Add Member</button>
    </div>
    ${t?'<div style="background:#EEF2FF;border:1px solid #C7D2FE;border-radius:8px;padding:10px 14px;margin-bottom:16px;font-size:13px;color:#3730A3">💡 Family members determine your health insurance recommendation — more dependents = higher cover needed.</div>':""}
    ${n}
    ${t?"":`<div class="empty-state">
      <div class="empty-icon">👨‍👩‍👧‍👦</div>
      <h3>No family members added</h3>
      <p>Add family members to get accurate insurance recommendations and plan for dependents.</p>
      <button class="btn btn-primary btn-sm" onclick="openFormModal('family')">+ Add Family Member</button>
    </div>`}`}function Y(e){const t=He[e];t&&(Oe(t.title,t.fields,t.save),e==="investments"&&setTimeout(()=>{const n=document.getElementById("f-type"),o=document.getElementById("f-assetclass");if(n&&o){const i=d=>({"Mutual Funds":"Equity",Stocks:"Equity",NPS:"Equity","Fixed Deposits":"Debt","Savings Account":"Debt","PPF / EPF":"Debt",SSY:"Debt","Insurance (LIC)":"Debt","Pension Plan":"Equity",Gold:"Gold","Real Estate":"Real Estate"})[d]||"Other";o.value=i(n.value),n.addEventListener("change",()=>{o.value=i(n.value)})}},50))}window.openFormModal=Y;function q(){const e=J(),t=document.getElementById("navBadgeInvestments");t&&(t.textContent=a.investments.length||"");const n=document.getElementById("navBadgeInsurance");n&&(n.textContent=a.insurance.length||"");const o=document.querySelectorAll("#page-dashboard .overview-card-value");if(o.length>=4){o[0].textContent=s(e.totalCurrentAssets),o[1].textContent=s(e.monthlySurplus),o[2].textContent=s(e.totalLiabilities),o[3].textContent=s(e.netWorth);const g=o[1].closest(".overview-card");if(g)if(e.monthlySurplus<0){g.style.background="linear-gradient(135deg, #FEF2F2 0%, #FECACA 100%)";const x=g.querySelector(".overview-card-icon");x&&(x.style.background="#EF4444")}else{g.style.background="linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)";const x=g.querySelector(".overview-card-icon");x&&(x.style.background="#10B981")}}const i=document.querySelectorAll("#page-dashboard .corpus-value");i.length>=3&&(i[0].textContent=s(e.projectedCorpus),i[1].textContent=s(e.requiredCorpus),i[2].textContent=e.readiness+"%");const d=document.querySelectorAll("#page-dashboard .corpus-sub");d.length>=3&&(d[1].textContent=(e.surplus>=0?"Surplus: +":"Deficit: ")+s(Math.abs(e.surplus)),d[1].className=e.surplus>=0?"corpus-sub success":"corpus-sub warning",d[2].textContent=e.readiness>=80?"On track!":"Need to increase investments",d[2].className=e.readiness>=80?"corpus-sub success":"corpus-sub warning");const b=document.querySelector("#page-dashboard .retirement-readiness");if(b){const g=b.querySelector(".corpus-indicator"),x=b.querySelector(".readiness-icon");e.readiness>=80?(g.className="corpus-indicator green",x.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="16 10 11 15 8 12"/></svg>'):e.readiness>=50?(g.className="corpus-indicator orange",x.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'):(g.className="corpus-indicator red",x.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>')}pt();const F=a.investments.filter(g=>g.isEmergencyFund),c=F.reduce((g,x)=>g+x.amount,0),p=e.totalExpenses*6,l=F.length,u={};F.forEach(g=>{u[g.type]=(u[g.type]||0)+g.amount});const h=document.querySelectorAll("#page-dashboard .ef-value");h.length&&(h[0].textContent=s(c));const v=document.querySelector("#page-dashboard .ef-target");v&&(v.textContent="Target: "+s(p)+" (6 months)");const B=document.querySelector("#page-dashboard .ef-breakdown");B&&(l===0?B.innerHTML=`<div style="text-align:center;padding:12px;color:var(--text-tertiary);font-size:13px">
        No investments earmarked. Go to <a href="#" onclick="event.preventDefault();navigateToPage('investments')" style="color:var(--accent-brand);text-decoration:underline">Investments</a> and tag items for emergency fund.</div>`:B.innerHTML=Object.entries(u).map(([g,x])=>`
        <div class="ef-item"><span class="ef-item-label">${g}</span><span class="ef-item-value">${s(x)}</span></div>`).join("")+`<div class="ef-item"><span class="ef-item-label">Tagged Items</span><span class="ef-item-value">${l}</span></div>`);const S=document.querySelectorAll("#page-expenses .exp-value");S.length>=3&&(S[0].textContent=s(e.totalExpenses),S[1].textContent=s(e.totalExpenses*12),S[2].textContent=a.expenses.length);const E=document.querySelectorAll("#page-retirement .ca-value");E.length>=4&&(E[0].textContent=s(e.totalExpenses),E[1].textContent=s(e.monthlyExpensesAtRetirement),E[2].textContent=s(e.requiredCorpus),E[3].textContent=s(e.projectedCorpus));let $=document.getElementById("retirementNarrative");if(!$){const g=document.querySelector("#page-retirement .panel-body");g&&($=document.createElement("div"),$.id="retirementNarrative",$.style.cssText="margin-top:16px;padding:14px 16px;border-radius:8px;font-size:13px;line-height:1.6",g.appendChild($))}if($&&e.totalExpenses>0){const g=z(),x=e.requiredCorpus-e.projectedCorpus,f=Math.max(1,g.retirementAge-g.currentAge);if(x<=0)$.style.background="#F0FDF4",$.style.border="1px solid #BBF7D0",$.style.color="#166534",$.innerHTML=`<strong>✅ You're on track!</strong> Your projected corpus of ${s(e.projectedCorpus)} exceeds the required ${s(e.requiredCorpus)} by <strong>${s(Math.abs(x))}</strong>. At retirement, your monthly expenses will be approximately ${s(e.monthlyExpensesAtRetirement)} after inflation.`;else{const r=(g.preRetirementReturn||12)/100/12,C=f*12,T=r>0?Math.round(x*r/(Math.pow(1+r,C)-1)):Math.round(x/C);$.style.background="#FEF2F2",$.style.border="1px solid #FECACA",$.style.color="#991B1B",$.innerHTML=`<strong>⚠️ Gap of ${s(x)}</strong> — you need ${s(e.requiredCorpus)} at age ${g.retirementAge} to sustain ${s(e.monthlyExpensesAtRetirement)}/mo in retirement. Your current projection falls short. <strong>Increase your monthly SIP by ~${s(T)}</strong> to close this gap over the next ${f} years.`}}else $&&($.style.background="#F0F9FF",$.style.border="1px solid #BAE6FD",$.style.color="#0369A1",$.innerHTML="💡 Add your monthly expenses to see personalized retirement projections and actionable guidance.");const L=document.getElementById("retirementCorpusProjection");if(L&&e.totalExpenses>0&&a.investments.length>0){const g=z(),x=e.yearsToRetirement,f=e.postRetirementYears,y=e.preReturnRate,r=e.postReturnRate,C=e.inflationRate,T=[],G=x+f;for(let I=0;I<=x;I++){let V=0;a.investments.forEach(D=>{const _=D.expectedReturn?D.expectedReturn/100:y;V+=W(D.amount,_,I),V+=U(D.sip||0,_,I)}),T.push({year:I,age:g.currentAge+I,corpus:Math.round(V),phase:"pre"})}let N=T[T.length-1].corpus;const w=e.totalExpenses*12*Math.pow(1+C,x);for(let I=1;I<=f;I++){const V=w*Math.pow(1+C,I-1);N=N*(1+r)-V,N<0&&(N=0),T.push({year:x+I,age:g.currentAge+x+I,corpus:Math.round(N),phase:"post"})}const P=25;let H=T;if(T.length>P){const I=Math.ceil(T.length/P);H=T.filter((V,D)=>D===0||D===x||D===T.length-1||D%I===0)}const M=Math.max(...H.map(I=>I.corpus),1),A=I=>I>=1e7?(I/1e7).toFixed(1)+"Cr":I>=1e5?(I/1e5).toFixed(0)+"L":s(I),Q=160,Z=H.map(I=>{const V=Math.max(3,Math.round(I.corpus/M*Q)),D=I.age===g.retirementAge,_=I.phase==="pre"?"#4F46E5":I.corpus>0?"#10B981":"#EF4444";return`<div style="display:flex;flex-direction:column;align-items:center;justify-content:flex-end;flex:1;min-width:0;height:${Q+20}px;position:relative" title="Age ${I.age}: ${s(I.corpus)}">
        ${D?'<div style="position:absolute;top:0;font-size:10px;font-weight:700;color:#F59E0B;white-space:nowrap">🏁 Retire</div>':""}
        <div style="width:80%;max-width:28px;height:${V}px;background:${_};border-radius:3px 3px 0 0;min-height:3px;transition:height 0.5s ease;opacity:${I.corpus===0?"0.3":"1"}"></div>
        <div style="font-size:9px;color:var(--text-tertiary);margin-top:4px;white-space:nowrap">${I.age}</div>
      </div>`}).join("");L.innerHTML=`
      <div style="display:flex;justify-content:space-between;margin-bottom:12px;font-size:12px">
        <div><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#4F46E5;margin-right:4px"></span>Pre-Retirement (Accumulation)</div>
        <div><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#10B981;margin-right:4px"></span>Post-Retirement (Drawdown)</div>
      </div>
      <div style="display:flex;align-items:flex-end;gap:2px">${Z}</div>
      <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:11px;color:var(--text-tertiary)">
        <span>Today (Age ${g.currentAge})</span>
        <span>Peak: ${A(M)}</span>
        <span>Age ${g.currentAge+G}</span>
      </div>`}else L&&(L.innerHTML='<p style="color:var(--text-tertiary);font-size:13px;text-align:center;padding:20px">Add expenses and investments to see your year-by-year corpus projection</p>');it(),dt(),ut(),mt(),gt()}window.updateDashboard=q;window.navigateToPage=ze;function it(){const e=document.getElementById("page-insurance-advisor");if(!e)return;const t=z(),n=J(),o=a.income.reduce((M,A)=>M+A.amount,0),i=a.loans.reduce((M,A)=>M+A.amount,0),d=a.family.length+1,b=a.insurance.some(M=>M.type==="Health"),F=a.insurance.some(M=>M.type==="Term"),c=a.insurance.filter(M=>M.type==="Health").reduce((M,A)=>M+A.amount,0),p=a.insurance.filter(M=>M.type==="Term").reduce((M,A)=>M+A.amount,0),l=d<=2?5e5:1e6,u=d<=2?15e5:(d<=4,25e5),h=l+u,v=Math.max(0,t.retirementAge-t.currentAge),B=o*12,S=(t.inflationRate||6)/100,E=(t.postRetirementReturn||8)/100,$=a.goals.reduce((M,A)=>M+(A.amount||0),0),L=a.investments.reduce((M,A)=>M+A.amount,0);a.expenses.reduce((M,A)=>M+A.amount,0);let g=0;if(B>0&&v>0)if(Math.abs(E-S)<.001)g=B*v;else{const M=(1+S)/(1+E);g=B*(1-Math.pow(M,v))/(E-S)}const x=n.requiredCorpus||0,f={pvIncome:Math.round(g),retCorpus:Math.round(x),liabilities:i,goals:$,investments:L,existingCover:p},y=f.pvIncome+f.retCorpus+f.liabilities+f.goals-f.investments-f.existingCover,r=B>0?Math.max(Math.round(y/1e5)*1e5,0):0,C=B>0&&(y<=0||L>0&&y/L<.05),T=Math.max(0,h-c),G=Math.max(0,r),N=(M,A)=>M&&A<=0?'<span class="check-status" style="color:#10B981"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Adequate</span>':M?`<span class="check-status" style="color:var(--accent-orange)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Gap: ${s(A)}</span>`:'<span class="check-status danger"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Missing</span>',w=B>0?`
    <div style="margin-top:12px;padding:12px;background:var(--bg-secondary);border-radius:var(--radius-md);font-size:12px;color:var(--text-secondary)">
      <div style="font-weight:600;margin-bottom:8px;color:var(--text-primary)">Human Life Value Breakdown</div>
      <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>PV of future income (${v}yrs)</span><span style="font-weight:600">+ ${s(f.pvIncome)}</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Retirement corpus needed</span><span style="font-weight:600">+ ${s(f.retCorpus)}</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Outstanding liabilities</span><span style="font-weight:600">+ ${s(f.liabilities)}</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Future goals</span><span style="font-weight:600">+ ${s(f.goals)}</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;color:var(--accent-green)"><span>Less: existing investments</span><span style="font-weight:600">− ${s(f.investments)}</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;color:var(--accent-green)"><span>Less: existing term cover</span><span style="font-weight:600">− ${s(f.existingCover)}</span></div>
      <div style="display:flex;justify-content:space-between;border-top:1px solid var(--border-light);padding-top:6px;margin-top:6px;font-weight:700;color:var(--text-primary)"><span>Net requirement</span><span>${y>0?s(r):"₹0 — Covered ✓"}</span></div>
    </div>`:"",P=B===0?"Add your income, liabilities, and goals to get a personalized term cover recommendation.":C?"✅ Your existing assets already cover income replacement, retirement corpus, liabilities, and goals. You may not need term insurance.":"Calculated using the Human Life Value method — PV of future income + retirement corpus + liabilities + goals, minus existing assets.",H=C?'<span class="check-status" style="color:#10B981"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Self-insured</span>':N(F,G);e.innerHTML=`
    <div class="page-header">
      <div>
        <h1 class="page-title">Insurance Advisor</h1>
        <p class="page-subtitle">Personalized recommendations using the Human Life Value method</p>
      </div>
    </div>
    <div class="advisor-cards">
      <div class="advisor-card">
        <div class="advisor-icon">🏥</div>
        <h3>Health Insurance</h3>
        <p>${o>0||d>1?"For a family of "+d+". Get a base family floater and layer a super top-up for cost-effective high coverage.":"Add family members to get a recommended health cover structure."}</p>
        <div class="advisor-recommendation">
          <span class="adv-label">Family Floater (Base)</span>
          <span class="adv-value">${s(l)}</span>
        </div>
        <div class="advisor-recommendation">
          <span class="adv-label">Super Top-up</span>
          <span class="adv-value">${s(u)}</span>
        </div>
        <div class="advisor-recommendation" style="background:var(--primary-50)">
          <span class="adv-label" style="font-weight:600;color:var(--text-primary)">Effective Cover</span>
          <span class="adv-value" style="color:var(--primary)">${s(h)}</span>
        </div>
        ${b?`<div class="advisor-recommendation"><span class="adv-label">Current Cover</span><span class="adv-value">${s(c)}</span></div>`:""}
        ${N(b,T)}
        <div style="margin-top:10px;font-size:12px;color:var(--text-secondary);line-height:1.5">
          💡 <strong>Why this structure?</strong> A super top-up activates after your base floater is exhausted, giving you ₹${(h/1e5).toFixed(0)}L effective coverage at a fraction of the cost of a single high-cover floater.
        </div>
      </div>
      <div class="advisor-card">
        <div class="advisor-icon">🛡️</div>
        <h3>Term Insurance</h3>
        <p>${P}</p>
        <div class="advisor-recommendation">
          <span class="adv-label">Recommended Cover</span>
          <span class="adv-value">${r>0?s(r):C?"₹0":"—"}</span>
        </div>
        ${F?`<div class="advisor-recommendation"><span class="adv-label">Current Cover</span><span class="adv-value">${s(p)}</span></div>`:""}
        ${H}
        ${w}
      </div>
    </div>`}function lt(e){const t=J(),{totalCurrentAssets:n,totalIncome:o,totalExpenses:i,totalLiabilities:d,netWorth:b,totalSIP:F,projectedCorpus:c,requiredCorpus:p,yearsToRetirement:l,postRetirementYears:u,readiness:h,surplus:v,monthlyExpensesAtRetirement:B,annualExpensesAtRetirement:S,profile:E,preReturnRate:$}=t,L=new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"});let g="",x="";const f="width:100%;border-collapse:collapse;margin:16px 0",y="text-align:left;padding:10px 12px;border-bottom:2px solid #E2E8F0;font-size:13px;color:#64748B;font-weight:600",r="padding:10px 12px;border-bottom:1px solid #F1F5F9;font-size:14px;color:#1E293B",C=(N,w,P)=>`<div style="flex:1;padding:20px;background:${P};border-radius:12px;text-align:center"><div style="font-size:12px;color:#64748B;margin-bottom:4px">${N}</div><div style="font-size:22px;font-weight:700;color:#1E293B">${w}</div></div>`;switch(e){case"networth":g="Net Worth Report",x=`
        <div style="display:flex;gap:12px;margin-bottom:24px">
          ${C("Total Assets",s(n),"#EEF2FF")}
          ${C("Total Liabilities",s(d),"#FEF2F2")}
          ${C("Net Worth",s(b),"#ECFDF5")}
        </div>
        <h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">💰 Assets — Investments</h3>
        <table style="${f}"><thead><tr><th style="${y}">Name</th><th style="${y}">Category</th><th style="${y}">Value</th></tr></thead><tbody>
        ${a.investments.length?a.investments.map(m=>`<tr><td style="${r}">${m.name}</td><td style="${r}">${m.type}</td><td style="${r};font-weight:600">${s(m.amount)}</td></tr>`).join(""):`<tr><td style="${r}" colspan="3">No investments added</td></tr>`}
        </tbody></table>

        <h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">🏦 Liabilities — Loans</h3>
        <table style="${f}"><thead><tr><th style="${y}">Name</th><th style="${y}">Type</th><th style="${y}">Outstanding</th><th style="${y}">EMI</th></tr></thead><tbody>
        ${a.loans.length?a.loans.map(m=>`<tr><td style="${r}">${m.name}</td><td style="${r}">${m.type}</td><td style="${r};font-weight:600">${s(m.amount)}</td><td style="${r}">${s(m.emi)}/mo</td></tr>`).join(""):`<tr><td style="${r}" colspan="4">No loans added</td></tr>`}
        </tbody></table>

        <h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">💵 Monthly Cash Flow</h3>
        <div style="display:flex;gap:12px">
          ${C("Income",s(o)+"/mo","#F0FDF4")}
          ${C("Expenses",s(i)+"/mo","#FFF7ED")}
          ${C("Surplus",s(o-i)+"/mo",o>=i?"#ECFDF5":"#FEF2F2")}
        </div>`;break;case"investment":g="Investment Summary Report";const N={};a.investments.forEach(m=>{N[m.type]=(N[m.type]||0)+m.amount}),x=`
        <div style="display:flex;gap:12px;margin-bottom:24px">
          ${C("Current Portfolio",s(n),"#EEF2FF")}
          ${C("Projected At Retirement",s(c),"#ECFDF5")}
          ${C("Monthly SIP",s(F),"#F0FDF4")}
        </div>
        <h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">📊 Allocation by Category</h3>
        <table style="${f}"><thead><tr><th style="${y}">Category</th><th style="${y}">Value</th><th style="${y}">Allocation</th></tr></thead><tbody>
        ${Object.entries(N).map(([m,k])=>`<tr><td style="${r}">${m}</td><td style="${r};font-weight:600">${s(k)}</td><td style="${r}">${n>0?Math.round(k/n*100):0}%</td></tr>`).join("")||`<tr><td style="${r}" colspan="3">No data</td></tr>`}
        </tbody></table>

        <h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">📋 Investment Projections (at retirement in ${l} yrs)</h3>
        <table style="${f}"><thead><tr><th style="${y}">Name</th><th style="${y}">Current Value</th><th style="${y}">SIP</th><th style="${y}">Return</th><th style="${y}">FV (Lump Sum)</th><th style="${y}">FV (SIP)</th><th style="${y}">Total FV</th></tr></thead><tbody>
        ${a.investments.map(m=>{const k=m.expectedReturn?m.expectedReturn/100:$,ae=Math.round(W(m.amount,k,l)),ke=Math.round(U(m.sip||0,k,l));return`<tr><td style="${r}">${m.name}</td><td style="${r}">${s(m.amount)}</td><td style="${r}">${m.sip?s(m.sip)+"/mo":"—"}</td><td style="${r}">${m.expectedReturn||E.preReturnRate}%</td><td style="${r}">${s(ae)}</td><td style="${r}">${s(ke)}</td><td style="${r};font-weight:600;color:#4F46E5">${s(ae+ke)}</td></tr>`}).join("")||`<tr><td style="${r}" colspan="7">No investments added</td></tr>`}
        <tr style="background:#F8FAFC"><td style="${r};font-weight:700" colspan="6">Total Projected Corpus</td><td style="${r};font-weight:700;color:#4F46E5">${s(c)}</td></tr>
        </tbody></table>
        <div style="margin-top:12px;padding:12px;background:#F8FAFC;border-radius:8px;font-size:12px;color:#64748B">
          <b>Methodology:</b> Lump sum FV = PV × (1 + r)ⁿ &nbsp;|&nbsp; SIP FV = PMT × [((1 + r/12)^(n×12) − 1) / (r/12)]<br>
          Using per-investment expected return where set, otherwise default ${E.preReturnRate}% p.a. Projection period: ${l} years.
        </div>`;break;case"retirement":g="Retirement Projection Report",x=`
        <div style="display:flex;gap:12px;margin-bottom:24px">
          ${C("Retirement Readiness",h+"%",h>=80?"#ECFDF5":"#FEF2F2")}
          ${C("Projected Corpus",s(c),"#EEF2FF")}
          ${C("Required Corpus",s(p),"#FEF3C7")}
        </div>
        <h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">📋 Assumptions</h3>
        <table style="${f}"><tbody>
          <tr><td style="${r}">Current Age</td><td style="${r};font-weight:600">${E.currentAge} years</td></tr>
          <tr><td style="${r}">Retirement Age</td><td style="${r};font-weight:600">${E.retirementAge} years</td></tr>
          <tr><td style="${r}">Life Expectancy</td><td style="${r};font-weight:600">${E.lifeExpectancy} years</td></tr>
          <tr><td style="${r}">Inflation Rate</td><td style="${r};font-weight:600">${E.inflation}% p.a.</td></tr>
          <tr><td style="${r}">Pre-Retirement Return Rate</td><td style="${r};font-weight:600">${E.preReturnRate}% p.a.</td></tr>
          <tr><td style="${r}">Post-Retirement Return Rate</td><td style="${r};font-weight:600">${E.postReturnRate}% p.a.</td></tr>
          <tr><td style="${r}">Years to Retirement</td><td style="${r};font-weight:600">${l} years</td></tr>
          <tr><td style="${r}">Post-Retirement Period</td><td style="${r};font-weight:600">${u} years</td></tr>
        </tbody></table>

        <h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">💰 Corpus Analysis</h3>
        <table style="${f}"><tbody>
          <tr><td style="${r}">Monthly Expenses (Today)</td><td style="${r};font-weight:600">${s(i)}</td></tr>
          <tr><td style="${r}">Monthly Expenses at Retirement (inflation-adjusted)</td><td style="${r};font-weight:600">${s(B)}</td></tr>
          <tr><td style="${r}">Annual Expenses at Retirement</td><td style="${r};font-weight:600">${s(S)}</td></tr>
          <tr><td style="${r}">Total Current Investments</td><td style="${r};font-weight:600">${s(n)}</td></tr>
          <tr><td style="${r}">Monthly SIP Contributions</td><td style="${r};font-weight:600">${s(F)}</td></tr>
          <tr style="background:#EEF2FF"><td style="${r};font-weight:700">Projected Corpus (compound growth)</td><td style="${r};font-weight:700;color:#4F46E5">${s(c)}</td></tr>
          <tr style="background:#FEF3C7"><td style="${r};font-weight:700">Required Corpus (PV of Growing Annuity)</td><td style="${r};font-weight:700;color:#D97706">${s(p)}</td></tr>
          <tr style="background:${v>=0?"#ECFDF5":"#FEF2F2"}"><td style="${r};font-weight:700">Surplus / Deficit</td><td style="${r};font-weight:700;color:${v>=0?"#10B981":"#EF4444"}">${v>=0?"+":""}${s(v)}</td></tr>
        </tbody></table>

        <h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">🔬 Per-Investment Projection</h3>
        <table style="${f}"><thead><tr><th style="${y}">Investment</th><th style="${y}">Current</th><th style="${y}">SIP</th><th style="${y}">Return</th><th style="${y}">FV at Retirement</th></tr></thead><tbody>
        ${a.investments.map(m=>{const k=m.expectedReturn?m.expectedReturn/100:$,ae=Math.round(W(m.amount,k,l)+U(m.sip||0,k,l));return`<tr><td style="${r}">${m.name}</td><td style="${r}">${s(m.amount)}</td><td style="${r}">${m.sip?s(m.sip)+"/mo":"—"}</td><td style="${r}">${m.expectedReturn||E.preReturnRate}%</td><td style="${r};font-weight:600;color:#4F46E5">${s(ae)}</td></tr>`}).join("")||`<tr><td style="${r}" colspan="5">No investments</td></tr>`}
        </tbody></table>

        <div style="margin-top:16px;padding:14px;background:#F8FAFC;border-radius:8px;font-size:12px;color:#64748B;line-height:1.6">
          <b>Methodology:</b><br>
          <b>Projected Corpus</b> = Σ [FV of each investment lump sum + FV of each SIP stream] using per-investment expected return rates with compound interest.<br>
          <b>Required Corpus</b> = Present Value of a Growing Annuity. Formula: (Annual Expense at Retirement) / (r − g) × [1 − ((1+g)/(1+r))ⁿ], where r = post-retirement return (${E.postReturnRate}%), g = inflation (${E.inflation}%), n = post-retirement years (${u}).<br>
          This ensures the corpus funds inflation-adjusted withdrawals while earning returns post-retirement.
        </div>`;break;case"insurance":g="Insurance Coverage Report";const w=z(),P=a.insurance.some(m=>m.type==="Health"),H=a.insurance.some(m=>m.type==="Term"),M=a.insurance.reduce((m,k)=>m+(k.premium||0),0),A=a.insurance.reduce((m,k)=>m+k.amount,0),Q=a.insurance.filter(m=>m.type==="Health").reduce((m,k)=>m+k.amount,0),Z=a.insurance.filter(m=>m.type==="Term").reduce((m,k)=>m+k.amount,0),I=a.family.length+1,D=a.income.reduce((m,k)=>m+k.amount,0)*12,_=a.loans.reduce((m,k)=>m+k.amount,0),we=a.goals.reduce((m,k)=>m+(k.amount||0),0),ee=a.investments.reduce((m,k)=>m+k.amount,0);a.expenses.reduce((m,k)=>m+k.amount,0);const te=Math.max(0,w.retirementAge-w.currentAge),he=(w.inflationRate||6)/100,ve=(w.postRetirementReturn||8)/100,Ve=I<=2?5e5:1e6,Ge=I<=2?15e5:25e5,Ce=Ve+Ge,_e=Math.max(0,Ce-Q);let ne=0;if(D>0&&te>0)if(Math.abs(ve-he)<.001)ne=D*te;else{const m=(1+he)/(1+ve);ne=D*(1-Math.pow(m,te))/(ve-he)}const Ie=t.requiredCorpus||0,oe=Math.round(ne)+Math.round(Ie)+_+we-ee-Z,se=D>0?Math.max(Math.round(oe/1e5)*1e5,0):0,Be=D>0&&(oe<=0||ee>0&&oe/ee<.05),Re=m=>m?'<span style="color:#10B981;font-weight:700">✓ Active</span>':'<span style="color:#EF4444;font-weight:700">✗ Missing</span>',Me=(m,k)=>m&&k<=0?'<span style="color:#10B981;font-weight:600">✓ Adequate</span>':m&&k>0?`<span style="color:#D97706;font-weight:600">⚠ Gap: ${s(k)}</span>`:'<span style="color:#EF4444;font-weight:600">✗ Missing</span>';x=`
        <div style="display:flex;gap:12px;margin-bottom:24px">
          ${C("Total Cover",s(A),"#EEF2FF")}
          ${C("Annual Premium",s(M),"#FEF3C7")}
          ${C("Policies",a.insurance.length,"#ECFDF5")}
        </div>

        <h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">🔍 Coverage Analysis</h3>
        <table style="${f}"><thead><tr><th style="${y}">Type</th><th style="${y}">Status</th><th style="${y}">Recommended</th><th style="${y}">Current</th><th style="${y}">Assessment</th></tr></thead><tbody>
          <tr><td style="${r}">Health Insurance</td><td style="${r}">${Re(P)}</td><td style="${r};font-weight:600">${s(Ce)}</td><td style="${r}">${P?s(Q):"—"}</td><td style="${r}">${Me(P,_e)}</td></tr>
          <tr><td style="${r}">Term Life Insurance</td><td style="${r}">${Re(H)}</td><td style="${r};font-weight:600">${Be&&se===0?"₹0 (Self-insured)":s(se)}</td><td style="${r}">${H?s(Z):"—"}</td><td style="${r}">${Be?'<span style="color:#10B981;font-weight:600">✓ Self-insured</span>':Me(H,se)}</td></tr>
        </tbody></table>

        ${D>0?`<h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">📊 Human Life Value Breakdown (Term Insurance)</h3>
        <table style="${f}"><tbody>
          <tr><td style="${r}">PV of future income (${te} yrs)</td><td style="${r};text-align:right;font-weight:600">+ ${s(Math.round(ne))}</td></tr>
          <tr><td style="${r}">Retirement corpus needed</td><td style="${r};text-align:right;font-weight:600">+ ${s(Math.round(Ie))}</td></tr>
          <tr><td style="${r}">Outstanding liabilities</td><td style="${r};text-align:right;font-weight:600">+ ${s(_)}</td></tr>
          <tr><td style="${r}">Future goals</td><td style="${r};text-align:right;font-weight:600">+ ${s(we)}</td></tr>
          <tr><td style="${r};color:#10B981">Less: existing investments</td><td style="${r};text-align:right;font-weight:600;color:#10B981">− ${s(ee)}</td></tr>
          <tr><td style="${r};color:#10B981">Less: existing term cover</td><td style="${r};text-align:right;font-weight:600;color:#10B981">− ${s(Z)}</td></tr>
          <tr style="border-top:2px solid #E2E8F0"><td style="${r};font-weight:700">Net requirement</td><td style="${r};text-align:right;font-weight:700">${oe>0?s(se):"₹0 — Covered ✓"}</td></tr>
        </tbody></table>`:""}

        <h3 style="margin:20px 0 8px;font-size:16px;color:#1E293B">📋 All Policies</h3>
        <table style="${f}"><thead><tr><th style="${y}">Policy</th><th style="${y}">Type</th><th style="${y}">Cover</th><th style="${y}">Premium</th></tr></thead><tbody>
        ${a.insurance.length?a.insurance.map(m=>`<tr><td style="${r}">${m.name}</td><td style="${r}">${m.type}</td><td style="${r};font-weight:600">${s(m.amount)}</td><td style="${r}">${s(m.premium)}/yr</td></tr>`).join(""):`<tr><td style="${r}" colspan="4">No policies added</td></tr>`}
        </tbody></table>`;break}const T=`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Simplifyn — ${g}</title>
    <style>
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'Inter',system-ui,-apple-system,sans-serif; padding:40px; max-width:900px; margin:0 auto; color:#1E293B; }
      @media print { body { padding:20px; } .no-print { display:none !important; } }
    </style></head><body>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;padding-bottom:20px;border-bottom:2px solid #E2E8F0">
      <div>
        <div style="font-size:24px;font-weight:800;color:#4F46E5;margin-bottom:4px">Simplifyn</div>
        <div style="font-size:20px;font-weight:700;color:#1E293B">${g}</div>
        <div style="font-size:13px;color:#64748B;margin-top:4px">Generated on ${L}</div>
      </div>
      <button class="no-print" onclick="window.print()" style="padding:10px 24px;background:#4F46E5;color:white;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer">🖨️ Print / Save PDF</button>
    </div>
    ${x}
    <div style="margin-top:40px;padding-top:16px;border-top:1px solid #E2E8F0;text-align:center;color:#94A3B8;font-size:12px">
      Generated by Simplifyn • Your personal finance companion
    </div>
  </body></html>`,G=window.open("","_blank");G.document.write(T),G.document.close(),R(g+" generated!")}window.generateReport=lt;let xe=null,be=null;function dt(){if(typeof Chart>"u")return;const e=J(),t=z(),n=document.getElementById("dashboardChartsRow"),o=a.investments.length>0,i=a.expenses.length>0;if(n&&(n.style.display=o||i?"flex":"none"),o){const d={"Mutual Funds":"Equity",Stocks:"Equity",NPS:"Equity","Pension Plan":"Equity","Fixed Deposits":"Debt","Savings Account":"Debt","PPF / EPF":"Debt",SSY:"Debt","Insurance (LIC)":"Debt",Gold:"Gold","Real Estate":"Real Estate"},b={Equity:"#4F46E5",Debt:"#10B981",Gold:"#F59E0B","Real Estate":"#EC4899",Other:"#8B5CF6"},F={};a.investments.forEach(p=>{const l=p.assetClass||d[p.type]||"Other";F[l]=(F[l]||0)+p.amount});const c=document.getElementById("assetAllocationChart");c&&(xe&&xe.destroy(),xe=new Chart(c,{type:"doughnut",data:{labels:Object.keys(F),datasets:[{data:Object.values(F),backgroundColor:Object.keys(F).map(p=>b[p]||"#64748B"),borderWidth:2,borderColor:"#fff",hoverOffset:8}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"60%",plugins:{legend:{position:"bottom",labels:{padding:12,usePointStyle:!0,font:{size:11,family:"Inter"}}},tooltip:{callbacks:{label:p=>{const l=p.dataset.data.reduce((u,h)=>u+h,0);return`${p.label}: ${s(p.parsed)} (${Math.round(p.parsed/l*100)}%)`}}}}}}))}if(o&&i){const d=e.yearsToRetirement,b=e.preReturnRate,F=[],c=[],p=[],l=Math.max(1,Math.floor(d/15));for(let h=0;h<=d;h+=l){let v=0;a.investments.forEach(B=>{const S=B.expectedReturn?B.expectedReturn/100:b;v+=W(B.amount,S,h),v+=U(B.sip||0,S,h)}),F.push("Age "+(t.currentAge+h)),c.push(Math.round(v)),p.push(Math.round(e.requiredCorpus))}if(F[F.length-1]!=="Age "+t.retirementAge){let h=0;a.investments.forEach(v=>{const B=v.expectedReturn?v.expectedReturn/100:b;h+=W(v.amount,B,d),h+=U(v.sip||0,B,d)}),F.push("Age "+t.retirementAge),c.push(Math.round(h)),p.push(Math.round(e.requiredCorpus))}const u=document.getElementById("corpusProjectionChart");if(u){be&&be.destroy();const h=v=>v>=1e7?(v/1e7).toFixed(1)+"Cr":v>=1e5?(v/1e5).toFixed(0)+"L":s(v);be=new Chart(u,{type:"line",data:{labels:F,datasets:[{label:"Projected Corpus",data:c,borderColor:"#4F46E5",backgroundColor:"rgba(79,70,229,0.1)",fill:!0,tension:.4,pointRadius:3,pointHoverRadius:6,borderWidth:2.5},{label:"Required Corpus",data:p,borderColor:"#F59E0B",borderDash:[6,4],borderWidth:2,pointRadius:0,fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{padding:12,usePointStyle:!0,font:{size:11,family:"Inter"}}},tooltip:{callbacks:{label:v=>`${v.dataset.label}: ${h(v.parsed.y)}`}}},scales:{y:{ticks:{callback:v=>h(v),font:{size:10}},grid:{color:"rgba(0,0,0,0.05)"}},x:{ticks:{font:{size:10},maxRotation:45},grid:{display:!1}}}}})}}}function ct(){const e=J(),t=[],n=e.totalIncome,o=e.totalExpenses,i=e.totalSIP,d=a.investments.filter(c=>c.isEmergencyFund).reduce((c,p)=>c+p.amount,0);if(e.requiredCorpus>0&&e.projectedCorpus<e.requiredCorpus&&e.yearsToRetirement>0){const c=e.requiredCorpus-e.projectedCorpus,p=e.preReturnRate/12,l=e.yearsToRetirement*12,u=(Math.pow(1+p,l)-1)/p,h=Math.round(c/u),v=c>=1e7?(c/1e7).toFixed(1)+"Cr":(c/1e5).toFixed(0)+"L";t.push({type:"action",icon:"📈",color:"#4F46E5",bg:"#EEF2FF",title:`Increase SIP by ${s(h)}/month`,detail:`to bridge the ₹${v} retirement gap over ${e.yearsToRetirement} years`,page:"retirement"})}if(e.requiredCorpus>0&&e.projectedCorpus>=e.requiredCorpus){const c=Math.round((e.projectedCorpus/e.requiredCorpus-1)*100);t.push({type:"success",icon:"🏆",color:"#10B981",bg:"#ECFDF5",title:`Retirement on track — ${c}% surplus`,detail:`Projected ${s(e.projectedCorpus)} exceeds required ${s(e.requiredCorpus)}`,page:"retirement"})}if(o>0){const c=(d/o).toFixed(1),p=Math.max(0,6-parseFloat(c));p>0?t.push({type:"warning",icon:"🏦",color:"#F59E0B",bg:"#FFFBEB",title:`Emergency fund covers ${c} months — ${p.toFixed(1)} months short`,detail:`Target: ${s(o*6)}. Current: ${s(d)}. Need ${s(Math.round(o*p))} more.`,page:"investments"}):t.push({type:"success",icon:"✅",color:"#10B981",bg:"#ECFDF5",title:`Emergency fund covers ${c} months — fully funded`,detail:`${s(d)} covers your ${s(o)}/month expenses`,page:"investments"})}if(n>0&&o>0){const c=Math.round(o/n*100);c>70?t.push({type:"danger",icon:"💸",color:"#EF4444",bg:"#FEF2F2",title:`Spending ${c}% of income — high risk`,detail:`Only ${100-c}% left for savings. Aim for below 50%.`,page:"expenses"}):c>50?t.push({type:"warning",icon:"📊",color:"#F59E0B",bg:"#FFFBEB",title:`Spending ${c}% of income`,detail:`${s(n-o)}/month surplus. Push savings to 30%+ to accelerate goals.`,page:"expenses"}):t.push({type:"success",icon:"💪",color:"#10B981",bg:"#ECFDF5",title:`Saving ${100-c}% of income — excellent`,detail:`${s(n-o)}/month surplus available for investments`,page:"investments"})}if(i>0&&e.yearsToRetirement>0){const c=U(5e3,e.preReturnRate,e.yearsToRetirement),p=c>=1e7?(c/1e7).toFixed(1)+"Cr":(c/1e5).toFixed(0)+"L";t.push({type:"info",icon:"🔮",color:"#8B5CF6",bg:"#F5F3FF",title:`₹5K more SIP/month = +₹${p} at retirement`,detail:`Compounding over ${e.yearsToRetirement} years at ${(e.preReturnRate*100).toFixed(0)}%`,page:"investments"})}a.goals.forEach(c=>{if(c.amount>0&&c.saved<c.amount){const p=c.amount-c.saved,l=c.year?Math.max(0,c.year-new Date().getFullYear()):0;l>0&&t.push({type:"info",icon:"🎯",color:"#3B82F6",bg:"#EFF6FF",title:`${c.name}: Need ${s(Math.round(p/(l*12)))}/month for ${l} years`,detail:`${s(c.saved)} saved of ${s(c.amount)} (${Math.round(c.saved/c.amount*100)}%)`,page:"goals"})}});const b=a.insurance.some(c=>c.type==="Health"),F=a.insurance.some(c=>c.type==="Term");if(!b&&n>0){const c=a.family.length+1,p=c<=2?5e5:1e6,l=c<=2?15e5:25e5,u=p+l;t.push({type:"danger",icon:"🏥",color:"#EF4444",bg:"#FEF2F2",title:"No health insurance — critical gap",detail:`Recommended: ${s(u)} (₹${(p/1e5).toFixed(0)}L floater + ₹${(l/1e5).toFixed(0)}L super top-up for family of ${c}).`,page:"insurance"})}if(!F&&n>0){const c=z(),p=Math.max(0,c.retirementAge-c.currentAge),l=n*12,u=(c.inflationRate||6)/100,h=(c.postRetirementReturn||8)/100;let v=0;if(l>0&&p>0)if(Math.abs(h-u)<.001)v=l*p;else{const f=(1+u)/(1+h);v=l*(1-Math.pow(f,p))/(h-u)}const B=e.requiredCorpus||0,S=a.loans.reduce((f,y)=>f+y.amount,0),E=a.goals.reduce((f,y)=>f+(y.amount||0),0),$=a.investments.reduce((f,y)=>f+y.amount,0),L=a.insurance.filter(f=>f.type==="Term").reduce((f,y)=>f+y.amount,0),g=Math.round(v)+Math.round(B)+S+E-$-L,x=Math.max(Math.round(g/1e5)*1e5,0);x>0&&t.push({type:"danger",icon:"🛡️",color:"#EF4444",bg:"#FEF2F2",title:"No term life insurance",detail:`Recommended: ${s(x)} (HLV method: income replacement + goals + liabilities − assets).`,page:"insurance"})}return a.income.length===0&&a.investments.length===0&&t.push({type:"info",icon:"🚀",color:"#3B82F6",bg:"#EFF6FF",title:"Get started — add your income and investments",detail:"We'll calculate retirement readiness, insurance needs, and personalized action items.",page:"income"}),t}function pt(){const e=ct(),t=document.querySelector("#actionItemsPanel .panel-count"),n=document.getElementById("actionItemsBody");if(t){const o=e.filter(i=>i.type==="danger"||i.type==="action").length;t.textContent=o>0?`(${o} actions)`:`(${e.length})`}n&&(e.length===0?n.innerHTML='<div class="alerts-good"><div class="alerts-good-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><span class="alerts-good-title">All Good!</span><span class="alerts-good-sub">Add data to unlock personalized insights</span></div>':n.innerHTML=e.map(o=>`<div style="border-left:3px solid ${o.color};background:${o.bg};padding:12px 14px;margin-bottom:8px;border-radius:8px;cursor:pointer;transition:transform 0.15s,box-shadow 0.15s" onclick="navigateToPage('${o.page}')" onmouseenter="this.style.transform='translateX(3px)';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.08)'" onmouseleave="this.style.transform='none';this.style.boxShadow='none'"><div style="display:flex;align-items:flex-start;gap:10px"><span style="font-size:20px;flex-shrink:0;line-height:1">${o.icon}</span><div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:600;color:#1E293B;margin-bottom:2px">${o.title}</div><div style="font-size:12px;color:#64748B;line-height:1.4">${o.detail}</div></div><span style="color:${o.color};font-size:14px;flex-shrink:0;margin-top:2px">→</span></div></div>`).join(""))}function ut(){const e=document.getElementById("page-goals");if(!e||a.goals.length===0)return;const t=a.goals.map(o=>{const i=o.amount>0?Math.min(100,Math.round(o.saved/o.amount*100)):0,d=Math.max(0,o.amount-o.saved),b=o.year?Math.max(0,o.year-new Date().getFullYear()):0,F=b>0?Math.round(d/(b*12)):0,c=2*Math.PI*40,p=c-c*i/100,l=i>=100?"#10B981":i>=50?"#3B82F6":i>=25?"#F59E0B":"#EF4444",u=i>=100?"✅ Complete":i>=50?"📈 On Track":"⚠️ Behind";return`<div style="background:white;border-radius:16px;padding:20px;border:1px solid #E2E8F0;display:flex;align-items:center;gap:20px;transition:transform 0.2s,box-shadow 0.2s" onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)'" onmouseleave="this.style.transform='none';this.style.boxShadow='none'">
      <svg width="90" height="90" viewBox="0 0 100 100" style="flex-shrink:0"><circle cx="50" cy="50" r="40" fill="none" stroke="#F1F5F9" stroke-width="7"/><circle cx="50" cy="50" r="40" fill="none" stroke="${l}" stroke-width="7" stroke-dasharray="${c}" stroke-dashoffset="${p}" stroke-linecap="round" transform="rotate(-90 50 50)" style="transition:stroke-dashoffset 1s cubic-bezier(0.16,1,0.3,1)"/><text x="50" y="46" text-anchor="middle" font-size="18" font-weight="800" fill="#1E293B">${i}%</text><text x="50" y="60" text-anchor="middle" font-size="8" fill="#94A3B8">saved</text></svg>
      <div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:700;color:#1E293B;margin-bottom:4px">${o.name}</div><div style="font-size:12px;color:#64748B;margin-bottom:8px">${u} • Target: ${o.year||"—"}</div><div style="display:flex;gap:16px;flex-wrap:wrap"><div style="font-size:12px"><span style="color:#94A3B8">Saved:</span> <strong style="color:#10B981">${s(o.saved)}</strong></div><div style="font-size:12px"><span style="color:#94A3B8">Target:</span> <strong>${s(o.amount)}</strong></div>${d>0?`<div style="font-size:12px"><span style="color:#94A3B8">Remaining:</span> <strong style="color:#EF4444">${s(d)}</strong></div>`:""}</div>${F>0?`<div style="margin-top:8px;padding:6px 10px;background:#EEF2FF;border-radius:6px;font-size:11px;color:#4F46E5;font-weight:600">💡 Save ${s(F)}/month to reach this goal by ${o.year}</div>`:""}</div>
      <div style="display:flex;gap:4px;flex-shrink:0"><button class="data-item-delete" onclick="editItem('goals','${o.id}')" title="Edit" style="color:var(--primary)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button><button class="data-item-delete" onclick="deleteItem('goals','${o.id}')" title="Delete"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></div>
    </div>`}).join(""),n=e.querySelector(".data-list");n&&(n.outerHTML=`<div style="display:flex;flex-direction:column;gap:12px">${t}</div>`)}function mt(){const e=document.getElementById("page-expenses");if(!e||a.expenses.length===0)return;const t=a.income.reduce((f,y)=>f+y.amount,0),n=a.expenses.reduce((f,y)=>f+y.amount,0),o=["rent","grocery","utilities","emi","insurance","medical","transport","education","loan","electricity","water","gas","fuel"],i=["entertainment","dining","shopping","subscriptions","travel","personal","lifestyle","netflix","movies","restaurant","clothing","vacation"];let d=0,b=0;const F={};a.expenses.forEach(f=>{const y=f.type||f.name;F[y]=(F[y]||0)+f.amount;const r=(y+" "+f.name).toLowerCase();o.some(C=>r.includes(C))?d+=f.amount:i.some(C=>r.includes(C))?b+=f.amount:d+=f.amount});const c=t>0?Math.max(0,t-n):0,p=t>0?t:n,l=p>0?Math.round(d/p*100):0,u=p>0?Math.round(b/p*100):0,h=p>0?Math.round(c/p*100):0,B=Object.entries(F).sort((f,y)=>y[1]-f[1]).map(([f,y])=>{const r=n>0?Math.round(y/n*100):0;return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px"><div style="width:100px;font-size:12px;font-weight:500;color:var(--text-secondary);flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f}</div><div style="flex:1;height:8px;background:#F1F5F9;border-radius:4px;overflow:hidden"><div style="width:${r}%;height:100%;background:linear-gradient(90deg,#4F46E5,#7C3AED);border-radius:4px;transition:width 0.5s"></div></div><div style="width:35px;text-align:right;font-size:11px;font-weight:600">${r}%</div><div style="width:70px;text-align:right;font-size:11px;color:var(--text-secondary)">${s(y)}</div></div>`}).join(""),S=`<div style="background:white;border-radius:12px;padding:16px;border:1px solid #E2E8F0;margin-bottom:12px"><div style="font-size:14px;font-weight:700;color:#1E293B;margin-bottom:12px">📐 50/30/20 Budget Rule</div>${t<=0?'<div style="font-size:12px;color:#94A3B8;margin-bottom:8px">Add income to compare against ideal split.</div>':""}<div style="display:flex;height:24px;border-radius:6px;overflow:hidden;margin-bottom:12px"><div style="width:${l}%;background:#3B82F6;min-width:${l>0?"2px":"0"}"></div><div style="width:${u}%;background:#F59E0B;min-width:${u>0?"2px":"0"}"></div><div style="width:${h}%;background:#10B981;min-width:${h>0?"2px":"0"}"></div></div><div style="display:flex;gap:16px;font-size:12px;flex-wrap:wrap"><div><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:#3B82F6;margin-right:4px"></span>Needs: <strong>${l}%</strong> <span style="color:${l<=50?"#10B981":"#EF4444"}">(≤50%)</span></div><div><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:#F59E0B;margin-right:4px"></span>Wants: <strong>${u}%</strong> <span style="color:${u<=30?"#10B981":"#EF4444"}">(≤30%)</span></div><div><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:#10B981;margin-right:4px"></span>Savings: <strong>${h}%</strong> <span style="color:${h>=20?"#10B981":"#EF4444"}">(≥20%)</span></div></div></div><div style="background:white;border-radius:12px;padding:16px;border:1px solid #E2E8F0"><div style="font-size:14px;font-weight:700;color:#1E293B;margin-bottom:12px">📊 Expense Breakdown</div>${B}</div>`,E=e.querySelector("#expenseAnalyzer");E&&E.remove();const $=document.createElement("div");$.id="expenseAnalyzer",$.innerHTML=S;const L=e.querySelector('div[style*="FFFBEB"]'),g=e.querySelector(".expense-summary-cards"),x=L||g;x&&x.nextSibling&&x.parentNode.insertBefore($,x.nextSibling)}let Ee=null;function gt(){if(typeof Chart>"u"||a.investments.length===0)return;const e=document.getElementById("page-investments");if(!e)return;let t=e.querySelector("#investmentChartContainer");if(!t){t=document.createElement("div"),t.id="investmentChartContainer",t.style.cssText="background:white;border-radius:12px;padding:16px;border:1px solid #E2E8F0;margin-bottom:16px",t.innerHTML='<div style="font-size:14px;font-weight:700;color:#1E293B;margin-bottom:12px">📊 Portfolio Allocation</div><div style="height:250px"><canvas id="investmentPageChart"></canvas></div>';const d=e.querySelector(".page-header");d&&d.nextSibling&&d.parentNode.insertBefore(t,d.nextSibling)}const n={"Mutual Funds":"#4F46E5",Stocks:"#10B981","Fixed Deposits":"#F59E0B","Savings Account":"#3B82F6","PPF / EPF":"#EC4899",NPS:"#8B5CF6",SSY:"#06B6D4",Gold:"#D97706","Insurance (LIC)":"#EA580C","Pension Plan":"#7C3AED","Real Estate":"#2563EB",Other:"#64748B"},o={};a.investments.forEach(d=>{o[d.type]=(o[d.type]||0)+d.amount});const i=document.getElementById("investmentPageChart");i&&(Ee&&Ee.destroy(),Ee=new Chart(i,{type:"doughnut",data:{labels:Object.keys(o),datasets:[{data:Object.values(o),backgroundColor:Object.keys(o).map(d=>n[d]||"#64748B"),borderWidth:2,borderColor:"#fff",hoverOffset:8}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"55%",plugins:{legend:{position:"right",labels:{padding:10,usePointStyle:!0,font:{size:11,family:"Inter"}}},tooltip:{callbacks:{label:d=>{const b=d.dataset.data.reduce((F,c)=>F+c,0);return`${d.label}: ${s(d.parsed)} (${Math.round(d.parsed/b*100)}%)`}}}}}}))}function yt(e){const t=e.target.closest(".btn");if(!t)return;const n=t.getBoundingClientRect(),o=Math.max(n.width,n.height),i=document.createElement("span");i.classList.add("ripple"),i.style.width=i.style.height=o+"px",i.style.left=e.clientX-n.left-o/2+"px",i.style.top=e.clientY-n.top-o/2+"px",t.appendChild(i),setTimeout(()=>i.remove(),600)}async function ft(){R("Generating Excel...","info"),window.XLSX||await new Promise((p,l)=>{const u=document.createElement("script");u.src="https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js",u.onload=p,u.onerror=l,document.head.appendChild(u)});const e=XLSX.utils.book_new(),t=z();if(a.income.length){const p=XLSX.utils.json_to_sheet(a.income.map(l=>({Source:l.name,Type:l.type,"Monthly Amount (₹)":l.amount})));XLSX.utils.book_append_sheet(e,p,"Income")}if(a.investments.length){const p=XLSX.utils.json_to_sheet(a.investments.map(l=>({Name:l.name,Type:l.type,"Asset Class":l.assetClass||"Other","Current Value (₹)":l.amount,"Monthly SIP (₹)":l.sip||0,"Expected Return (%)":l.expectedReturn||0,"Emergency Fund":l.isEmergencyFund?"Yes":"No"})));XLSX.utils.book_append_sheet(e,p,"Investments")}if(a.loans.length){const p=XLSX.utils.json_to_sheet(a.loans.map(l=>({Name:l.name,Type:l.type,"Outstanding (₹)":l.amount,"EMI (₹)":l.emi||0})));XLSX.utils.book_append_sheet(e,p,"Loans")}if(a.insurance.length){const p=XLSX.utils.json_to_sheet(a.insurance.map(l=>({Policy:l.name,Type:l.type,"Cover (₹)":l.amount,"Annual Premium (₹)":l.premium||0})));XLSX.utils.book_append_sheet(e,p,"Insurance")}if(a.expenses.length){const p=XLSX.utils.json_to_sheet(a.expenses.map(l=>({Category:l.name,Type:l.type,"Monthly Amount (₹)":l.amount})));XLSX.utils.book_append_sheet(e,p,"Expenses")}if(a.goals.length){const p=XLSX.utils.json_to_sheet(a.goals.map(l=>({Goal:l.name,"Target (₹)":l.amount,"Target Year":l.year,"Saved (₹)":l.saved||0})));XLSX.utils.book_append_sheet(e,p,"Goals")}const n=a.income.reduce((p,l)=>p+l.amount,0),o=a.investments.reduce((p,l)=>p+l.amount,0),i=a.loans.reduce((p,l)=>p+l.amount,0),d=a.expenses.reduce((p,l)=>p+l.amount,0),b=J(),F=[{Metric:"Monthly Income",Value:n},{Metric:"Monthly Expenses",Value:d},{Metric:"Monthly Surplus",Value:n-d},{Metric:"Total Investments",Value:o},{Metric:"Total Liabilities",Value:i},{Metric:"Net Worth",Value:o-i},{Metric:"Projected Corpus",Value:Math.round(b.projectedCorpus)},{Metric:"Required Corpus",Value:Math.round(b.requiredCorpus)},{Metric:"Retirement Age",Value:t.retirementAge}],c=XLSX.utils.json_to_sheet(F);XLSX.utils.book_append_sheet(e,c,"Summary"),XLSX.writeFile(e,`Simplifyn_Report_${new Date().toISOString().slice(0,10)}.xlsx`),R("Excel exported!","success")}window.exportExcel=ft;async function ht(){R("Generating PDF...","info"),window.html2pdf||await new Promise((u,h)=>{const v=document.createElement("script");v.src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",v.onload=u,v.onerror=h,document.head.appendChild(v)});const e=z(),t=a.income.reduce((u,h)=>u+h.amount,0),n=a.expenses.reduce((u,h)=>u+h.amount,0),o=a.investments.reduce((u,h)=>u+h.amount,0),i=a.loans.reduce((u,h)=>u+h.amount,0),d=o-i,b=J(),F=b.requiredCorpus>0?Math.min(100,Math.round(b.projectedCorpus/b.requiredCorpus*100)):0,c=new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}),p=document.createElement("div");p.style.cssText="font-family:Inter,system-ui,sans-serif;padding:40px;color:#1E293B;max-width:800px",p.innerHTML=`
    <div style="text-align:center;margin-bottom:32px;padding-bottom:20px;border-bottom:3px solid #4F46E5">
      <div style="font-size:28px;font-weight:800;color:#4F46E5;margin-bottom:4px">Simplifyn</div>
      <div style="font-size:18px;font-weight:600;color:#475569">Complete Financial Report</div>
      <div style="font-size:13px;color:#94A3B8;margin-top:8px">Generated on ${c} • ${e.name||"User"}</div>
    </div>

    <div style="display:flex;gap:16px;margin-bottom:24px">
      <div style="flex:1;padding:16px;background:#EEF2FF;border-radius:12px;text-align:center">
        <div style="font-size:11px;font-weight:600;color:#6366F1;text-transform:uppercase;margin-bottom:4px">NET WORTH</div>
        <div style="font-size:22px;font-weight:800;color:#4F46E5">${s(d)}</div>
      </div>
      <div style="flex:1;padding:16px;background:#ECFDF5;border-radius:12px;text-align:center">
        <div style="font-size:11px;font-weight:600;color:#059669;text-transform:uppercase;margin-bottom:4px">MONTHLY SURPLUS</div>
        <div style="font-size:22px;font-weight:800;color:#10B981">${s(t-n)}</div>
      </div>
      <div style="flex:1;padding:16px;background:#FEF3C7;border-radius:12px;text-align:center">
        <div style="font-size:11px;font-weight:600;color:#D97706;text-transform:uppercase;margin-bottom:4px">RETIREMENT READINESS</div>
        <div style="font-size:22px;font-weight:800;color:#F59E0B">${F}%</div>
      </div>
    </div>

    <h3 style="font-size:16px;margin:20px 0 12px;color:#1E293B">📊 Income & Expenses</h3>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px">
      <tr><td style="padding:8px;border:1px solid #E2E8F0">Monthly Income</td><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;text-align:right">${s(t)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #E2E8F0">Monthly Expenses</td><td style="padding:8px;border:1px solid #E2E8F0;font-weight:600;text-align:right">${s(n)}</td></tr>
      <tr style="background:#F0FDF4"><td style="padding:8px;border:1px solid #E2E8F0;font-weight:700">Monthly Surplus</td><td style="padding:8px;border:1px solid #E2E8F0;font-weight:700;text-align:right;color:${t>=n?"#10B981":"#EF4444"}">${s(t-n)}</td></tr>
    </table>

    <h3 style="font-size:16px;margin:20px 0 12px;color:#1E293B">💰 Investments</h3>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px">
      <tr style="background:#F8FAFC"><th style="padding:8px;border:1px solid #E2E8F0;text-align:left">Name</th><th style="padding:8px;border:1px solid #E2E8F0;text-align:left">Type</th><th style="padding:8px;border:1px solid #E2E8F0;text-align:right">Value</th><th style="padding:8px;border:1px solid #E2E8F0;text-align:right">SIP</th></tr>
      ${a.investments.map(u=>`<tr><td style="padding:8px;border:1px solid #E2E8F0">${u.name}</td><td style="padding:8px;border:1px solid #E2E8F0">${u.type}</td><td style="padding:8px;border:1px solid #E2E8F0;text-align:right;font-weight:600">${s(u.amount)}</td><td style="padding:8px;border:1px solid #E2E8F0;text-align:right">${u.sip?s(u.sip):"—"}</td></tr>`).join("")||'<tr><td colspan="4" style="padding:8px;border:1px solid #E2E8F0;color:#94A3B8">No investments</td></tr>'}
      <tr style="background:#EEF2FF"><td colspan="2" style="padding:8px;border:1px solid #E2E8F0;font-weight:700">Total</td><td style="padding:8px;border:1px solid #E2E8F0;text-align:right;font-weight:700;color:#4F46E5">${s(o)}</td><td style="padding:8px;border:1px solid #E2E8F0"></td></tr>
    </table>

    <h3 style="font-size:16px;margin:20px 0 12px;color:#1E293B">🏦 Retirement Projection</h3>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px">
      <tr><td style="padding:8px;border:1px solid #E2E8F0">Projected Corpus at age ${e.retirementAge}</td><td style="padding:8px;border:1px solid #E2E8F0;font-weight:700;text-align:right;color:#4F46E5">${s(Math.round(b.projectedCorpus))}</td></tr>
      <tr><td style="padding:8px;border:1px solid #E2E8F0">Required Corpus</td><td style="padding:8px;border:1px solid #E2E8F0;font-weight:700;text-align:right;color:#D97706">${s(Math.round(b.requiredCorpus))}</td></tr>
      <tr style="background:${b.projectedCorpus>=b.requiredCorpus?"#ECFDF5":"#FEF2F2"}"><td style="padding:8px;border:1px solid #E2E8F0;font-weight:700">${b.projectedCorpus>=b.requiredCorpus?"Surplus":"Deficit"}</td><td style="padding:8px;border:1px solid #E2E8F0;font-weight:700;text-align:right;color:${b.projectedCorpus>=b.requiredCorpus?"#10B981":"#EF4444"}">${s(Math.round(Math.abs(b.projectedCorpus-b.requiredCorpus)))}</td></tr>
    </table>

    <div style="margin-top:40px;padding-top:16px;border-top:1px solid #E2E8F0;text-align:center;color:#94A3B8;font-size:11px">
      Generated by Simplifyn • Your personal finance companion
    </div>
  `;const l={margin:.5,filename:`Simplifyn_Report_${new Date().toISOString().slice(0,10)}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}};await html2pdf().set(l).from(p).save(),R("PDF exported!","success")}window.exportPDF=ht;function vt(){const e={appData:JSON.parse(JSON.stringify(a)),profile:z(),exportDate:new Date().toISOString(),version:"1.0"},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),o=document.createElement("a");o.href=n,o.download=`Simplifyn_Backup_${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(n),R("Data exported!","success")}window.exportJSON=vt;function xt(e){const t=e.target.files[0];if(!t)return;const n=new FileReader;n.onload=o=>{try{const i=JSON.parse(o.target.result);i.appData?(Object.assign(a,i.appData),O(),ce(),pe(),ue(),me(),ge(),ye(),fe(),q(),R("Data imported successfully!","success")):R("Invalid backup file","error")}catch{R("Failed to parse file","error")}},n.readAsText(t),e.target.value=""}window.importJSON=xt;document.addEventListener("DOMContentLoaded",()=>{Ue(),ce(),pe(),ue(),me(),ge(),ye(),fe(),q(),document.addEventListener("click",t=>{t.target.closest(".btn")&&yt(t)});let e="";document.addEventListener("keydown",t=>{if(!(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"||t.target.tagName==="SELECT")){if(t.key==="n"||t.key==="N"){e="n";return}if(e==="n")switch(t.key.toLowerCase()){case"i":Y("income");break;case"v":Y("investments");break;case"e":Y("expenses");break;case"g":Y("goals");break;case"l":Y("loans");break;case"f":Y("family");break}e=""}})});

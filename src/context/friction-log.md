# {% Product name + version% } Friction log

**by {%NAME%}**
**Date:** {%DATE%} *(optional)*

---

## BLUF (Bottom line up-front)

*Put the most important details first. Don't tease or delay your main point because people are busy and their time is valuable. BLUF is a military communications acronym that stands for "bottom line up front" and is designed to enforce speed and clarity in reports.*

**Example:** During integration testing of the {%App%} SDK, we encountered three critical authentication issues that block developer onboarding. The primary friction point is unclear error messaging during OAuth setup, affecting an estimated 60% of new integrators based on support ticket volume.

---

## Persona *(optional)*

*Define who you are testing as. This helps fine-tune what someone with this background would expect the product to function like versus what they experienced. Different personas will encounter different friction points based on their expertise, goals, and context.*

**Role:** *(e.g., Senior Android Engineer, Startup CTO, Junior Developer, Solutions Architect)*

**Background:** *(e.g., 10 years mobile development, first-time API integrator, experienced with similar SDKs)*

**Primary Goal:** *(e.g., Incorporate SDK feature into existing app, Evaluate API for production use, Build proof-of-concept)*

**Technical Context:** *(e.g., Working in legacy codebase, Greenfield project, Tight deadline, Evaluating multiple vendors)*

**Example:**
- **Role:** Startup CTO
- **Background:** Full-stack generalist, limited mobile experience, evaluating multiple vendor APIs
- **Primary Goal:** Determine if Ring API meets technical requirements for MVP launch in 6 weeks
- **Technical Context:** Small team, no dedicated mobile engineers, need to ship fast

---

## Prerequisites *(optional)*

*List what developers need before starting: accounts, tools, access levels, environment setup.*

- Account type required:
- Tools needed:
- Access permissions:
- SDK/API version tested:
- Environment: OS, device/emulator specs

---

## Required steps

*Document the steps needed to test, access gates, or reproduce the integration flow.*

1.
2.
3.

---

## Questions

*Capture questions that arose during integration. These often reveal documentation gaps or unclear product behavior.*

- Why does...
- What is the difference between...
- In the docs, we say X, but the actual behavior is Y. Which is correct?
- What happens when...

---

## Friction

*Document each friction point with severity, context, and impact. Adjust sections as needed for your use case.*

### Section / Route / Feature of App

**Severity:** 🔥 Critical | ⚠️ High | ⚡ Medium | ℹ️ Low *(optional)*

**Issue:** When I went to _____________, this thing happened.

**Time to Complete:** Expected X minutes, actually took Y minutes *(optional)*

**Environment Details:** *(optional)*
- OS:
- SDK version:
- Device/Emulator:

**Expected vs Actual Behavior:** *(optional)*
- **Expected:** The system should...
- **Actual:** Instead, the system...

**Attempted Code snippets:** *(optional)*

```javascript
// app.js
var spiderman = function (person) {
  return 'Hello, ' + person;
};
var user = 'Peter Parker';
console.log(spiderman(user));
```

**Expected Output:** *(optional)*
```
Hello, Peter Parker
```

**Actual Output:** *(optional)*
```
Error: undefined is not a function
```

**Error Messages:** *(optional)*
```
[Paste console output or error messages here]
```

**Issue Analysis:**

In this snippet of code, it seems that we're trying to do this, when really this is the intention.

**TBD:**
- What's the purpose of this code?
- Is this the recommended approach?

**Status:** 🔥 Bug | 📝 Documentation Gap | 🤔 Unclear Behavior *(optional)*

---

### Additional Friction Points *(add as many sections as needed)*

*Copy the friction section template above for each additional issue you encounter.*

---

## Video friction logs *(optional)*

*Screen recordings provide context that text cannot capture. Include links to recordings showing the friction in action.*

- Onboarding to the app: [link to video screen recording]
- Integration recap: [link to video screen recording]
- Specific error reproduction: [link to video screen recording]

---

## Success Criteria *(optional)*

*Define what "working correctly" looks like so teams have clear targets for resolution.*

- Developers should be able to complete authentication in under 5 minutes
- Error messages should clearly indicate the next action to take
- Documentation should match actual API behavior

---

## Next Steps

*This section should come AFTER the friction log, where you walk through the friction log with Product, Engineering, and Marketing counterparts together. From there, the goal is that several action items and follow-ups for improving the developer experience will materialize.*

### Action items:

- [ ] {%Name%} to work on X — **Priority:** High | **Due:** {%DATE%} *(optional)*
- [ ] {%Name%} to investigate Y — **Status:** In Progress *(optional)*
- [ ] {%Name%} to update documentation for Z — **Status:** Blocked *(optional)*

---

## Appendix

### Related resources: *(optional)*

- [How we use friction logs to improve products at Stripe](https://dev.to/stripe/how-we-use-friction-logs-to-improve-products-at-stripe-i6n)
- [An introduction to friction logging](https://developerrelations.com/developer-experience/an-introduction-to-friction-logging)
- [Friction Logs: The Key to Unlocking Product Growth](https://www.chameleon.io/blog/friction-logs)

### Scratch pad *(optional)*

*Stream of consciousness while integrating. Use this space for raw notes that you'll refine and add to the sections above. Crossed-out text indicates content that has been moved to appropriate sections.*

---

**Template Notes:**

All sections marked *(optional)* can be removed or adjusted based on your needs. The core required sections are BLUF, Friction, and Next Steps. The Persona section helps contextualize friction points based on the tester's background and expectations. A Senior Android Engineer will have different expectations and encounter different friction than a Startup CTO evaluating the API for the first time. Add severity indicators, time tracking, environment details, and status tracking only if they help your team prioritize and resolve issues more effectively. This template is flexible—adapt it to match your workflow and the complexity of the integration you're documenting.
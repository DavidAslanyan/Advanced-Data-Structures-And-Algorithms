/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const set = new Set();
  
  for (const email of emails) {
      const filtered = filterEmail(email);
      set.add(filtered);
  }
  
  return set.size;
};


function filterEmail(email) {
  let newEmail = "";
  let domainAt = -1;
  let plusAt = -1;
  
  for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") domainAt = domainAt >= 0 ? domainAt : i;
      if (email[i] === "+") plusAt = plusAt >= 0 ? plusAt : i;
  } 
  
  if (plusAt === -1) plusAt = Infinity;
  
  for (let i = 0; i < email.length; i++) {
      if (i >= plusAt && i < domainAt) {
          continue;
      }
      
      if (i >= domainAt) {
          newEmail += email[i];
      }
      
      if (email[i] !== "." && i < domainAt) {
          newEmail += email[i];
      }
  }
  
  return newEmail;
}
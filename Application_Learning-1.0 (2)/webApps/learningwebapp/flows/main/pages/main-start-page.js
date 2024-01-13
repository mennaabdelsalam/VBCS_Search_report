define([], () => {
  'use strict';

  var PageModule = function PageModule() {};

  PageModule.prototype.getSearchQueryParameter = function(employeeIDSearchCriteria, salarySearchCriteria){
      let queryParam = '';
      if(employeeIDSearchCriteria !== undefined && employeeIDSearchCriteria !== null && employeeIDSearchCriteria !== ""){
          queryParam += "id LIKE '%" + employeeIDSearchCriteria + "%'";
      }
      if(salarySearchCriteria !== undefined && salarySearchCriteria !== null && salarySearchCriteria > 0){
        if(queryParam == ""){
          queryParam += "salary < " + salarySearchCriteria;
        } else {
          queryParam += "and salary < " + salarySearchCriteria;
        }
      }
      if(queryParam == ""){
        return "id LIKE '%%'"
      }
      return queryParam;
  }
  
  return PageModule;
});

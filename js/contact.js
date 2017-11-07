function renderContactMe(selector){
    var strContactMe=
    '<form>'+
    '<div class="form-group">'+
      '<label for="exampleFormControlInput1">Email </label>'+
      '<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">'+
    '</div>'+
    '<div class="form-group">'+
      '<label for="exampleFormControlSelect1">Subject</label>'+
      '<select class="form-control" id="exampleFormControlSelect1">'+
        '<option>1</option>'+
        '<option>2</option>'+
        '<option>3</option>'+
        '<option>4</option>'+
        '<option>5</option>'+
      '</select>'+
    '</div>'+
    '<div class="form-group">'+
      '<label for="exampleFormControlSelect2">Message Body</label>'+
      '<select multiple class="form-control" id="exampleFormControlSelect2">'+
        '<option>1</option>'+
        '<option>2</option>'+
        '<option>3</option>'+
        '<option>4</option>'+
        '<option>5</option>'+
      '</select>'+
    '</div>'+
    '<div class="form-group">'+
      
  
    '<div class="form-check form-check-inline">'+
    '<label class="form-check-label"> '+
      '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Is Urgent?'+
    '</label>'+
  '</div>'+
  
  
      '<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>'+
    '</div>'+
  '</form>';

    elContact =  document.querySelector(selector);
    elContact.innerHTML = strContactMe;   
}


export function set_cookie (cookie_name, cookie_value, lifespan_in_days, valid_domain) {
  var domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
  document.cookie = cookie_name + "=" + encodeURIComponent( cookie_value ) + "; max-age=" + 60 * 60 * 24 * lifespan_in_days + "; path=/" + domain_string;
}

export function get_cookie (cookie_name) {
  var name = cookie_name + "=";
  var arr = document.cookie.split(";");
  for(let i = 0; i < arr.length; i++) {
      let current = arr[i];
      while(current.charAt(0) === ' ') {
        current = current.slice(1, current.length);
      }
      if(current.indexOf(name) === 0) {
        return current.slice(name.length, current.length);
      }
  }
  return null;
}

export function delete_cookie ( cookie_name, valid_domain ) {
  const domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
  document.cookie = cookie_name + "=; max-age=0; path=/" + domain_string ;
}

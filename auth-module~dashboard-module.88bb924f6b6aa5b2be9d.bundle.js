(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(t,e,o){"use strict";function a(r,s,d,i,u,c,t){var o=this;o.login=function(t){var e=i.defer();return function(t){t.url.localeCompare("/login")?s.remove("token"):s.token=s.get("token");s.token&&(u.defaults.headers.common.Authorization="Token "+s.token);var e=i.defer(),o=r+t.url,a=t.method||"GET",n=t.data||{};return u({url:o,withCredentials:!1,method:a.toUpperCase(),headers:{"X-CSRFToken":s.csrftoken},data:n}).then(function(t){console.log("request",t),e.resolve(t.data,t.status)},function(t){d.includes("changePassword")||d.includes("forgotPassword")||c.goTo("login"),t.data&&(t.data.status=t.status),0==t.status&&(""==t.data&&(t.data={},t.data.status=0,t.data.non_field_errors=["Could not connect. Please try again."]),null==t.data&&(t.data={},t.data.status=0,t.data.non_field_errors=["Server timed out. Please try again."])),e.reject(t.data,t.status,t.headers,t.config)}),e.promise}({method:"POST",url:"login/",data:{email:t.email,password:t.password}}).then(function(t){s.remove("token"),u.defaults.headers.common.Authorization="Token "+t.token,s.token=t.token,s.put("token",t.token),o.authenticated=!0,e.resolve(t)},function(t){e.reject(t)}),e.promise},o.logout=function(){console.log("logout"),t.path("/")}}o.r(e),o.d(e,"authService",function(){return a}),a.$inject=["API_ROOT","$cookies","$state","$q","$http","stateFactory","$location"]}}]);
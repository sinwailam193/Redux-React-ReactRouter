$(() => {
  $("a").click(event => event.preventDefault());
  $("[data-toggle='popover']").popover();
});

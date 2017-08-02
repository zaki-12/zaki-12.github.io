 <script type="text/javascript">
        var K2RatingURL = 'https://www.e-iceblue.com/';
        (function ($) {
            $.fn.initDropdownMenu = function () {
                var menuBar = this;
                var menuBarRight = menuBar.offset().left + menuBar.outerWidth();
                var prevDropdown = null;
                this.find(' > li').hover(function () {
                    var menuItem = $(this);
                    if (!menuItem.data('init')) {
                        var panel = $('<div class="dropdown"></div>').appendTo(menuItem);
                        $('>ul', menuItem).each(function (i2, subList) {
                            var column = $('<div class="column"></div>').appendTo(panel);
                            if (i2 > 0) {
                                column.addClass('right');
                            }
                            subList = $(subList);
                            var prev = subList.prev();
                            if (prev.hasClass('separator')) {
                                prev.appendTo(column);
                            } else {
                                var listInSubList = $('>li>ul', subList);
                                if (listInSubList.length > 0) {
                                    var separator = $('>li:first>a', subList).text();
                                    $('<div class="separator">' + separator + '</div>').appendTo(column);
                                    var container = $('<ul></ul>');
                                    $('>li', subList).each(function (i3, item3) {
                                        if (i3 == 0) {
                                            $(item3).find('>ul>li').appendTo(container);
                                        } else {
                                            if ($(item3).find('>ul').length > 0) {
                                                $(item3).find('>ul>li').appendTo(container);
                                            } else {
                                                $(item3).appendTo(container);
                                            }
                                        }
                                    });
                                    subList.empty();
                                    container.find('li').appendTo(subList);
                                }
                            }
                            subList.appendTo(column);
                        });
                        menuItem.data('init', true)
                    }

                    var currDropdown = menuItem.find(' > div.dropdown');
                    if (prevDropdown != null) {
                        if (currDropdown.length == 0 || currDropdown[0] != prevDropdown) {
                            $(prevDropdown).stop(true, true).hide();
                            prevDropdown = null;
                        }
                    }

                    if (currDropdown.length > 0) {
                        if (menuItem.offset().left + currDropdown.outerWidth() > menuBarRight) {
                            var left = menuBarRight - currDropdown.outerWidth();
                            currDropdown.css('left', left + 'px');

                            var bgLeft = menuItem.outerWidth() / 2 - 6 + menuItem.offset().left - left;
                            var bgPosition = currDropdown.css('background-position');
                            if (!bgPosition) {
                                //ie
                                bgPosition = bgLeft + 'px ' + currDropdown.css('background-positionY');
                            } else {
                                bgPosition = bgPosition.replace(/^([^\s]+)\s+(.+)$/i, bgLeft + 'px $2');
                            }
                            currDropdown.css('background-position', bgPosition);
                        }

                        prevDropdown = currDropdown[0];
                        currDropdown.stop(true, true).slideDown(100);
                    }
                }, function () {
                    $(this).find(' > div.dropdown').stop(true, true).delay(800).fadeOut(1);
                });

                return this;
            };
        });
    </script>


 
    <script type="text/javascript">var Warp = Warp || {};
    Warp.Settings = {"color": "turquoise", "itemColor": null};</script>
	
	
	<script type="text/javascript">
    var box1 = document.getElementsByClassName('box1');
    var box2 = document.getElementsByClassName('box2');
    var timer = null;
    var len = box1.length;
    for (var i = 0; i < len; i++) {
        (function (i) {
            box1[i].onmouseover = function () {
                box2[i].style.display = 'block';
            };
            box1[i].onmouseout = function () {
                timer = setTimeout(function () {
                    box2[i].style.display = 'none';
                }, 50)
            };
            box2[i].onmouseover = function () {
                clearTimeout(timer);
                this.style.display = 'block';
            };
            box2[i].onmouseout = function () {
                this.style.display = 'none';
            }
        })(i)
    }
</script>
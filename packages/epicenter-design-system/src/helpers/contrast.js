function contrast(color) {
  // const background = window.getComputedStyle(document.querySelector('html')).getPropertyValue('--background-1')
  const background = this.backgroundColor;
  var rgb = function (color) {
    if (color.indexOf("rgb") === 0) {
      var arr = color.match(/\d+/g);
      return {
        r: arr[0],
        g: arr[1],
        b: arr[2],
      };
    } else if (color.indexOf("#") === 0) {
      var hex =
        color.length === 4
          ? color.replace(/#([0-9a-f])([0-9a-f])([0-9a-f])/i, "#$1$1$2$2$3$3")
          : color;
      return {
        r: parseInt(hex.substr(1, 2), 16),
        g: parseInt(hex.substr(3, 2), 16),
        b: parseInt(hex.substr(5, 2), 16),
      };
    } else {
      return {
        r: 0,
        g: 0,
        b: 0,
      };
    }
  };
  var luminance = function (color) {
    var c = rgb(color);
    var r = c.r / 255;
    var g = c.g / 255;
    var b = c.b / 255;
    var R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    var G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    var B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };
  var contrast = function (color, background) {
    var l1 = luminance(color);
    var l2 = luminance(background);
    return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
  };
  var c = contrast(color, background);
  if (c < 4.5) {
    return "&#x26A0;";
  }
  // if c is greater than or equal to 4.5 but less than 7, return 'AA'
  else if (c >= 4.5 && c < 7) {
    return "AA &check;";
  } else if (c >= 7) {
    return "AAA &check;";
  }
  // return false;
}

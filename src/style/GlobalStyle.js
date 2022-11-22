import "@fontsource/spartan";
import "@fontsource/spartan/100.css";
import "@fontsource/spartan/200.css";
import "@fontsource/spartan/300.css";
import "@fontsource/spartan/400.css";
import "@fontsource/spartan/500.css";
import "@fontsource/spartan/600.css";
import "@fontsource/spartan/700.css";
import "@fontsource/spartan/800.css";
import "@fontsource/spartan/900.css";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`


@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

@keyframes smallshake {
  0% { transform: translate(0.5px, 0.5px) rotate(0deg); }
  10% { transform: translate(-0.5px, -1px) rotate(-1deg); }
  20% { transform: translate(-1.5px, 0px) rotate(1deg); }
  30% { transform: translate(1.5px, 1px) rotate(0deg); }
  40% { transform: translate(0.5px, -0.5px) rotate(1deg); }
  50% { transform: translate(-0.5px, 1px) rotate(-1deg); }
  60% { transform: translate(-1.5px, 0.5px) rotate(0deg); }
  70% { transform: translate(1.5px, 0.5px) rotate(-1deg); }
  80% { transform: translate(-0.5px, -0.5px) rotate(1deg); }
  90% { transform: translate(0.5px, 1px) rotate(0deg); }
  100% { transform: translate(0.5px, -1px) rotate(-1deg); }
}

.intercom-1o29jst ebkmurr2 {
  display: none;
}

body * {
  box-sizing: border-box;
  font-family: "Spartan", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Noto Color Emoji";
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: white;
    /* border-radius: 5px; */
  }
  &::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 5px;
  }
}
*:focus {
    outline: 0;
}

.sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap; /* added line */
      border: 0;
}
.ant-tabs-dropdown-menu-item {
  min-width: 0px;
}
.ant-select-dropdown-menu-item {
    padding: 8px;
}

  .ant-select-selector {
    /* border-top: none !important;
    border-left: none !important;
    border-right: none !important; */
    border-color: ${({ theme }) => theme.colors.color_base_dark} !important;
    border-radius: 4px !important;
    align-items: center;
    box-shadow: none !important;
    
    /* padding: 0 !important; */
  }
 


  .ant-select-selection-overflow-item{
    margin: 1.5px 0px;
    .ant-select-selection-search {
      margin: 0px !important;
    }
  }
  .ant-select-selection-overflow-item-suffix{
    margin: 0px;
  }

  .ant-select-selector:focus-within {
    color: ${({ theme }) => theme.colors.color_text_body};
    border-color: ${({ theme }) => theme.colors.color_base_darker} !important; 
  }

  .ant-select-selection-item {
    color: ${({ theme }) => theme.colors.color_text_body};
    /* background-color: ${({ theme }) =>
      theme.colors.color_base_regular} !important; */
  }
  

  .ant-select-item-option {
    color: ${({ theme }) => theme.colors.color_primary_dark} !important;
  }
  .ant-select-clear {
    margin-top: -8px;
  }
  .ant-select-dropdown {
    &::-webkit-scrollbar {
      width: 4px;
      height: 0px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.color_base_darker};
      border-radius: 5px;
    }
  }
  .ant-select-selection-item::after {
    content: none !important;
  }








.ant-popover-message-title {
    word-break: keep-all !important;
    width: max-content;
}

.ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.color_primary_regular};
}

/* .ant-select-item-empty {
    min-height: 0px !important;
    padding: 0 !important;
    height: 0px !important;
    margin: 0 !important;
} */
.ant-modal-close{
  border: none !important;
  outline: none !important;
}
.ant-popover-inner-content {
    padding: 4px 8px !important;
}
.rc-virtual-list-holder {
  &::-webkit-scrollbar {
    width: 12px;
    height: 0px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.color_base_regular};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.color_base_darker};
    border-radius: 5px;
  }
}
.rc-virtual-list-scrollbar {
  width: 12px !important;
}
.rc-virtual-list-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.color_base_darker} !important;
}
button {
  border: none;
  outline: none;
  cursor: pointer;
}
input {
  outline: none;
  box-shadow: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.ant-avatar{
  cursor: pointer;
  user-select: none;
}
div{
  user-select: none;
}
[data-title] {
  position: relative;
}

[data-title]:hover::before {
  content: attr(data-title);
  position: absolute;
  top: -24px;
  border-radius: 2px;
  padding: 0 3px;
  background: #416987;
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
  height: 20px;
  line-height: 20px;
  z-index: 9999;
  opacity: 0.7;
}

[data-download] {
  position: relative;
}

[data-download]:hover::before {
  content: attr(data-download);
  position: absolute;
  bottom: -24px;
  border-radius: 2px;
  padding: 0 3px;
  background: #416987;
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
  height: 20px;
  line-height: 20px;
  z-index: 9999;
  opacity: 0.7;
}
p {
  margin: 0;
  padding: 0;
}
/* ol, ul, li {
    margin:0; 
    padding:0;
    list-style: none;
  } */
  
/* html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: San Francisco;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: ‘’;
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: #000;
}
input {
  outline: none;
}
button {
  border: none;
  outline: none;
  cursor: pointer;
} */
`;

export default GlobalStyle;

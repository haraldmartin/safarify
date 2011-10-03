javascript:(function(){var%20versionsMap={'312.3':'1.3.1','312.5':'1.3.2','312.6':'1.3.2','412':'2.0','413':'~2.0','416.11':'2.0.2','416.12':'~2.0.2','417.8':'2.0.3','417.9.2':'~2.0.3','419.3':'2.0.4','522.11':'3.0','522.12':'3.0.2','522.12.1':'3.0.3','523.10':'3.0.4','523.12':'~3.0.4','523.15':'~3.0.4','525.13':'3.1','525.17':'3.1.1','525.18':'~3.1.1','525.19':'~3.1.1','525.20':'3.1.1','525.21':'3.1.2','525.22':'~3.1.2','525.26':'3.2','525.27':'3.2.1','525.28':'3.2.3','525.29':'~3.2.3','526.11.2':'4.0%20beta','528.1':'~4.0%20beta','528.5':'4.0%20beta','528.7':'4.0%20beta','528.9':'~4.0%20beta','528.16':'4.0%20beta','528.17':'4.0%20beta','530.1':'~4.0','530.9':'~4.0','530.11':'~4.0','530.15':'~4.0','530.17':'4.0','530.18':'4.0.1','530.19':'4.0.2','530.20':'4.0.3','531.9':'4.0.3','531.21.10':'4.0.4','531.22.7':'4.0.5','533.16':'4.1','533.17.8','4.1.1','533.16','5.0','533.17.8','5.0.1''533.18.5','5.0.2','533.19.4','5.0.3','533.20.27','5.0.4','533.21.1','5.0.5','534.48.3','5.1'};var%20colorsMap={'1':'%23f66','2':'%23f90','3':'%23ff6','4':'%236f6'};function%20trim(str){return%20str.replace(/^\s+/,'').replace(/\s+$/,'')}function%20insertAfter(origEl,newEl){if(origEl.nextChild){origEl.parentNode.insertBefore(newEl,origEl.nextChild)}else{origEl.parentNode.appendChild(newEl)}}function%20createVersionEl(buildNumber){var%20el=document.createElement('span');el.innerHTML=createMarkup(buildNumber);return%20el}function%20createMarkup(buildNumber){return'(%3Cspan%20style=%22background-color:'+getColor(buildNumber)+'%22%3E'+buildNumber+'%3C/span%3E)'}function%20getColor(buildNumber){var%20majorVersion=buildNumber.match(/^~%3F(\d+)\./)[1];return%20colorsMap[majorVersion]}function%20tryNormalizeBuildNumber(buildNumber){var%20reTripleNumber=/^(\d+)\.(\d+)\.(\d+)$/,match=buildNumber.match(reTripleNumber);if(match){return%20match[1]+'.'+match[2]}}function%20isValid(buildNumber){return!!(buildNumber%26%26(buildNumber%20in%20versionsMap))}var%20links=document.getElementsByTagName('a'),link,i=0;for(;link=links[i++];){var%20buildNumber=trim(link.innerHTML);if(!isValid(buildNumber)){buildNumber=tryNormalizeBuildNumber(buildNumber)}if(isValid(buildNumber)){insertAfter(link,createVersionEl(versionsMap[buildNumber]))}}})();
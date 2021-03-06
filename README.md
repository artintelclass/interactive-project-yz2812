# Interactive-Project Documentation

[video link](https://youtu.be/-b6IFrfuDm4)  
Yuxin Zhou  
Feb 19 2018  
Art.Intel  

## Motivation
Presentation nowadays becomes more frequently used in various occasions, and Ted Talk style presentation is getting more popular. However, in this kind of presentation, the speaker is usually in front of audience and backs to the screen, with walking around the stage during the presentation, which makes it difficult for them to have a sppech desk with a computer to swicth slides and remind them of the following content. To solve this issue, my project makes the mobilephone a remote of slides as well as the content-hint for speakers and therefore enable them to deliver better presentation.

## Introduction & Usage
With the help of Reveal.js, a javascript library generating presentation slide on javascript and html, users can geneate their slides in code of javascript and html, and even they are not familiar with code, they can use www.slides.com to design the slides and the website can automatically generate the corresponding codes, and by simply copying and paste in the websites connected to local server, speakers can start control their slides with their mobilephones as a remote control and check the slides with the mobilephone.

With the trained machine learning programs, when speakers tilt the mobilephone in certain directions while pressing the screen, the slides  on the screen (in the presentation webpage shown on the computer) will switch coresspondingly.Comparing with some similar programs or systems allowing speakers to swipe on the mobilephone's page to switch presentation page's slide, my project has a significant advantage, which prevents from the slide switches resulted by unintentionally touchs. 
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/pre1.png)
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/pre2.png)
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/pre3.png)
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/pre4.png)

Also, by clicking arrows on mobilephone's webpage. speakers can switch the slide on the mobilephone (which can be the same as the computer's presenting version or can contain more notes). 
 ![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/mobile.png)

In general, this interactive presentation assistve system enables speakers to easily switch the slides in Ted Talk style presentation without run to the computer to switch, and makes them easily check the slides and notes without staring at computer screen for information.

## The Training Process
The data processing procedure starts from the mobilephone webpage's transfering data about tilting to Wekinator Inputhelper through local server, then Wekinator Inputhelp process the data and sends them to Wekinator. In Wekinator, I set "left", "right", "up", "down", and "null" modes for different gestures, and after the machine learning and training, it can distinguish different gestures and find out corresponding mode from new input data about tilts, and finally send the mode's corresponding instruction to the presentation page to switch slides.  
Up  
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/up.jpeg)
Down(two gestures)  
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/down.jpeg)
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/down2.jpeg)
Left  
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/left.jpeg)
Right  
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/right.jpeg)
Null  
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/null.jpeg)

After previous class's user testing, I noticed different users might hold mobilephone in different ways, which makes mobilephones have different tilt when users rotate them. Therefore, I had one more round of user testing on the weeked, and during this user testing, I requested users to participate in training the gesture recognition as well, and the Wekinator program with more examples from different users becomes more accurate in distinguish gestures.
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/weki.png)
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/input.png)

Since I am using dynamic wrapping mode of Wekinator to distinguish different gestures, and to prevent users mistakenly send noise data to the Wekinator, I set a data transmission restrian in Wekinator Inputhelper, where only the the touching position changes, then it will start transmit data. Therefore, in previous instruction, users were requested to keep swiping (without moving the fingers away from the screen) during the whole process of changing the gesture, but the feedback from user testing shown users were confused by this and felt not natural to swipe and rotate the mobilephone at the same time. Afterwards, I tried different interactive methods, and surprisingly noticed when userd press the same place of screen with different pressure will also lead the change of touching position. Based on this discovery, I update the interactive methods to make users feel natural, and finally decided the interactive method shown in the video. Also, depending on users' preference, they can also choose to press twice (rotate the mobilephone to press once and roate to the direction they want to switch to press the second time).


## Discussion & Reflection
During making the project, I have spent more than 10 hours to figure out issues related to web socket data transmission, especially for the frequent crushing down of the local server and the dual transmission for two webpages for synchronizing two pages. In terms of the server, with the help of professor Sherwood, we found out when the presenting page (receive part) was not fully loaded before the data starting transfering, then that page will cruch down and result in the server's cruch down. To solve this issue, the sequence of statring each part matters. Firstly start two webpages, and then satrts the Wekinator ensures the stability of the system, and when the presentation page requires refresh, we shall pause the data trasission on Wekinator, and resatrt afte the loading. 
![](https://github.com/artintelclass/interactive-project-yz2812/blob/master/pics/error.png)

For the seocnd issue, although I tried many ways to connect, limited time and the frequent server crush made me stop the exploration for this project, but I am going to continue polishing the system and trying to figure out this issue. However, during user testing, I also collected opinions preferring current function of the mobilephone page, as they think current function enabling speakers to check all the slides is more useful than synchronizing the pages. With more time provided, I think I am able to add a mode slection module in the mobilephone page, which allows users to change mode from synchronizing to freely check all the slides.

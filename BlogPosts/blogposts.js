// Post One: a-study-on-bad-data-visualization

let post = "The most important part of a good data visualization is: </br> - to present as much data as possible as simply as possible with relevant heading </br> - and labels in the proper position. </br> - A chart that’s incredibly easy to read yet has little to no important data is a failure.</br> - In addition, a chart, has a lot of useful data yet is impossible to understand, is useless.</br> </br> </br> Like attached visualization is a bad example of data visualization. There is: </br> - too much information trying to be presented making it hard to understand</br> - in many places hard to see</br> - two types of charts make the visualization too busy</br> - the visualization should have just stuck to the ranking bar at the bottom instead of including the world map</br> </br> </br> Suggestion: The whole data set can be present as continental data. Can make grouping as regions and presented them in different bar charts, instead of world map.</br> </br> </br> Link: https://lnkd.in/gPwQh6z </br> </br> </br> </br> Now if I come to this attached visualization is an example of meaningless visualization. They’ve created a confusing visualization that has 2 core problems. First, the size of the bubbles has no relationship with the values within them (e.g. why is 13% bigger than 28%?). Second, the overlap of the bubbles creates an unintentional Venn diagram which can be misleading. </br> Again, if someone wants to use bubbles that contain a value and have them represented in different sizes. Then the size relatives to the value. What is absent here.</br> </br> </br> Suggestion: the best way to represent this data would be through a bar chart, using more colors, and sizes should depend on percentages.</br> </br> </br> Link: https://lnkd.in/gZBVWgQ Titled COLOR TRENDS THE MOST-USED COLORS OF THE WORLD's TOP BRANDS"

document.getElementById('blog-post-one').innerHTML = post.slice(0, 350);
document.getElementById('blog-post-one').innerHTML += `...`;

let blogPostOne = () => {
	location.replace("AStudyOnBadDataVisualization.html")
}


// Post Two: Machine-Behavior-is-an-amazing-thing

let postTwo = "Let's assume, there is a machine with an assignment. </br> Now, if the machine does fail or not, we have to find out that this is a Classification type problem of machine learning. </br> But, if we wanna find out after how many times the machine will fail, that is a Regression type problem of machine learning. </br> Now, assume there are a set of signals for that machine to do its assignment. Now if we wanna find out from those signals, why the machine is failed. Suppose there are 10000 signals. But the machine may fail for the causes created by 8 to 10 signals of them. Now, finding those 8 to 10 causes among 10000 in total by the signals is a Clustering type problem of machine learning. </br> So, finding out what kind of machine learning is totally depends on how I am defining the problem. </br> I hope everyone will get it useful also."

document.getElementById('blog-post-two').innerHTML = postTwo.slice(0, 350);
document.getElementById('blog-post-two').innerHTML += `...`;

let blogPostTwo = () => {
	location.replace("Machine-Behavior-is-an-amazing-thing.html")
}
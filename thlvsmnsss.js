//<![CDATA[
imgr=new Array();imgr[0]="data:image/gif;base64,R0lGODlhAQABAIAAAPHx8AAAACH5BAEAAAAALAAAAAABAAEAQAICRAEAOw==";showRandomImg=true;aBold=true;numposts1=4;numposts11=1;newsize=400;function recentposts1(json){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0;img=new Array;if(numposts1<=json.feed.entry.length)maxpost=numposts1;else maxpost=json.feed.entry.length;document.write('<div class="blog_featured_posts">');for(var i=0;i<maxpost;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var tag=entry.category[0].term;var pcm;var posturl;var cropsize=newsize;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++)if(entry.link[k].rel=="alternate"){posturl=entry.link[k].href;break}
for(var k=0;k<entry.link.length;k++)if(entry.link[k].rel=="replies"&&entry.link[k].type=="text/html"){pcm=entry.link[k].title.split(" ")[0];break}
if("content"in entry)var postcontent=entry.content.$t;else if("summary"in entry)var postcontent=entry.summary.$t;else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&(b!=-1&&(c!=-1&&d!="")))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++)if(parseInt(m)==month[u2]){m=month2[u2];break}
var daystr=day+" "+m+" "+y;if(i==0){var st="#ff3d66";var trtd='<div class="blog_featured_post first"><a href="'+posturl+'"><div class="blog_contents"><span>'+tag+'</span><h3>'+posttitle+'</h3></div><div class="feat-img" style="background-image:url('+img[i]+');"></div></a></div>';document.write(trtd)}
if(i==1){var trtd='<div class="blog_featured_post second"><a href="'+posturl+'"><div class="blog_contents"><span>'+tag+'</span><h3>'+posttitle+'</h3></div><div class="feat-img" style="background-image:url('+img[i]+');"></div></a></div>';document.write(trtd)}
if(i==2){var trtd='<div class="blog_featured_post third"><a href="'+posturl+'"><div class="blog_contents"><span>'+tag+'</span><h3>'+posttitle+'</h3></div><div class="feat-img" style="background-image:url('+img[i]+');"></div></a></div>';document.write(trtd)}
if(i==3){var trtd='<div class="blog_featured_post fourth"><a href="'+posturl+'"><div class="blog_contents"><span>'+tag+'</span><h3>'+posttitle+'</h3></div><div class="feat-img" style="background-image:url('+img[i]+');"></div></a></div>';document.write(trtd)}
j++}
document.write('</div>')};
$(document).ready(function()
{
if($("#mycredit").attr("href")!="https://bloggereklentileri.blogspot.com/")
{
window.location.href="https://bloggereklentileri.blogspot.com";
}
});
//]]>
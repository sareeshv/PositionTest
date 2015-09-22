README
========

This project can be used to discuss the SASS usage and some CSS properties usings.
Steps to use:

1. Fork the repository
2. navigate to the directory from the Terminal
2. run > bower install
3. To run the SASS file watcher execute
4. sass --watch styles.scss
5. The above command will generate the styles.css file on this localtion and will watch for any changes in the .scss file
6. after running the above command the folder will look like in the screenshot added. (after.png)


a) Some CSS properties added to create some shapes like (triangle, Circle etc which is commonly used). It can be achieved using few CSS tricks. Please check the CSS file.

b) There is a 'nav-menu' class added which has position: absolute
So according to the need we can place the menu anywhere on top/bottom by adding another CSS class 'top' / 'bottom'
which has curresponding styles and the menu will appear exact positions.

example:

 &.nav-menu{
      height: 50px;
      width: 100%;
      background: #2980B9;
      position: absolute;
      &.top{
        top: 0;
      }
      &.bottom{
        bottom: 0;
      }
  }
  
usage:
 <div class="container nav-menu bottom">



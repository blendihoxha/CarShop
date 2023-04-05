![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1 - done with the lecturer

Create components named `ButtonCounter` and `ButtonToClick`.

`ButtonCounter` component displays a `div` with `h1` and two buttons created with the use of `ButtonToClick` component. `h1` should initially display 0 - the target content to display here will be the total number of times the buttons have been clicked.

`ButtonToClick` component contains a `button` that, when clicked, sends an appropriate information to callback that takes an `onClick` attribute from props. **Do not forget to check if this attribute has been properly passed and if it is a function.**

The diagram below illustrates how the process of passing a function should look like, more or less, and where it is called. This is just an illustrative image, meant to help you understand the whole process.

![](images/example.jpg)


## Exercise 2

Create components named `Shop` and `ShopItem`.

`ShopItem` contains a `div` with `h1` whose contents are extracted from props `title`. In the `div`, there is also a button with the text "Buy". When it is clicked, an appropriate message is sent to callback that extracts it from props `onBuy`. Do not forget to check if this attribute has been properly passed and if it is a function. The callback call should be made after the parameter taken from the title given in props (`title`).

Shop should have the following structure:

```html
<div>
  <ShopItem title="MacBook Pro" />
  <ShopItem title="Dell X5500" />
  <ShopItem title="Asus NT6000" />
  <ul>
    {list}
  </ul>           
</div>        
```
Instead of `list`, a list of `li` elements should appear, with elements that the user marked by clicking "Buy".

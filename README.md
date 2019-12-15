# Colorpic

Serves png images to use in placeholders in web development projects

## Demo: 

Demo deployed [here](https://colorpic.now.sh)

# Usage

 - Get image with Height x Width Pixels default color (gray)

    ```  
      https://colorpic.now.sh/500/300
    ```
 - Get square image with default color (gray)

    ```
      https://colorpic.now.sh/500
    ``` 

  - Get image with color name (must give both height and width in pixels)

    ```
      https://colorpic.now.sh/500/300/green
    ```
  
  - Get image with color hex without __#__ (must give both height and width in pixels)

    ```
      https://colorpic.now.sh/500/300/00c78c
    ```

# Use Case Examples

  - Use as src in ```<img>``` tag

    ```html
    <img src="https://colorpic.now.sh/300/300/green" alt="Green Pic">
    ```

  - Use as url in css ```background-image: url()```

    ```css
      .bluish {
        height: 500px;
        width: 350px;
        background-image: url(https://colorpic.now.sh/500/350/458D96);
      }
    ```
  - Pretty much where you need an image
  - Go crazy with colors

# Development

- Install dependencies
  ```javascript
    npm install
  ```

- Run start command
  ```
    npm run start
  ```

- Application will be launched at port 3000



# License

- [MIT](/LICENSE)

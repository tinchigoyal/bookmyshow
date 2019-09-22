# Book My House

It is a online booking system of houses. You can book a complete house on a single click.

## Code Structure
1. All the assets (JS, CSS, image) resources are stored in assets directory
2. Re-usable services are created in services.js
3. Configurations are present in config.js
4. services are used in controller.js
5. Color theme of website is completey flexible. You can change all the colors of website using 2 CSS rules in common.css.

```
.bmh-primary-color{
color:#df293a;
}

.bmh-secondary-color{
color:white;
}

.bmh-primary-bg{
    background: linear-gradient(135.46deg,#d11450ab,#df293a94);
}

.bmh-secondary-bg{
    background:#1ab64f;
}
```

## Next Steps
1. gitignore addition
2. grunt addition to concat JS and CSS resources

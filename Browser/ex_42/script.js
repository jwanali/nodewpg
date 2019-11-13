const images = ['batmanwb.png', 'flashwb.png', 'supermanwb.png', 'wonder_womanwb.png'];
            const body = document.querySelector('body');
            images.forEach(function(image) {
                const img = document.createElement('img');
                img.setAttribute('src',`${image}`);
                img.src = `img/${image}`;
                img.title = `${image.slice(0,image.length -6)}`
                body.appendChild(img);
                img.onmouseover = function() {
                img.src = `img/${image.slice(0,image.length - 6) + image.slice(image.length - 4)}`;
             };
                img.onmouseout = function() {
                img.src = `img/${image}`;
             };
                img.onclick = function() {
                alert('SUPERHERO');
             };
            });
       
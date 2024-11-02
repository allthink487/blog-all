import React from 'react'
import Image from 'next/image'
export default function FloatClear() {
  return (
    <div>
        <Image
        src="/category.jpg"
        width={250}
        height={250}
        alt="mm"
        className="float-right"
        
        />
        <Image
        src="/cat.jpg"
        width={250}
        height={250}
        alt="mm"
        className="float-left"
        
        />
        <p  className="clear-left">
        3. **Exécuter votre serveur** : Démarrez votre serveur avec la commande suivante dans votre terminal :
   
   ```bash
   node app.js
   ```
4. **Accéder à votre serveur** : Vous pouvez accéder à votre serveur local en ouvrant un navigateur et en allant sur `http://localhost:3000`.
### 2. Hébergement sur une plateforme cloud (pour production)

#### a. **Heroku** (Simple et gratuit pour démarrer)
1. **Créer un compte** : Inscrivez-vous sur [Heroku](https://www.heroku.com/).
   ```bash
   git init
   git add .

   ```

4. **Créer une application sur Heroku** :

   ```bash
   heroku create
   ```

   Cela va créer une nouvelle application sur Heroku et associer un dépôt Git distant.

5. **Déployer votre application** :

   ```bash
   git push heroku master
   ```

   Votre application sera maintenant déployée sur Heroku et vous obtiendrez une URL pour y accéder.

6. **Consulter les logs** : Pour voir les logs de votre application :

   ```bash
   heroku logs --tail
   ```

#### b. **VPS (Virtual Private Server) - DigitalOcean, AWS EC2, etc.**

Si vous avez besoin de plus de contrôle sur votre environnement de serveur, un VPS est une bonne option.

1. **Choisir un fournisseur VPS** : DigitalOcean, AWS EC2, ou Vultr sont des options populaires.

2. **Configurer le VPS** :
  
   - **Accéder à votre VPS via SSH**.
 
   Par exemple, pour DigitalOcean, vous pouvez utiliser :

   ```bash
   ssh root@your_server_ip
   ```

3. **Installer Node.js sur le serveur** :

   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

4. **Transférer votre code** : Vous pouvez transférer vos fichiers via `scp` ou utiliser Git pour cloner votre dépôt sur le serveur.

5. **Installer les dépendances** :

   ```bash
   npm install
   ```

6. **Démarrer votre application** :

   ```bash
   node app.js
   ```

7
   ```bash
   npm install -g pm2
   pm2 start app.js
   pm2 startup
   ```

8. **Configurer un nom de domaine** : Vous pouvez associer un nom de domaine à votre serveur en configurant les enregistrements DNS.

#### c. **Autres plateformes**

- **Glitch** : Bon pour des projets expérimentaux ou de petite envergure.
- **Netlify et Vercel** : Idéal pour des applications front-end avec un backend léger.

### 3. Configurations supplémentaires (SSL, Sécurité, etc.)

s configurations sensibles (par exemple, les clés API).

### Conclusion

Héberger un serveur Node.js peut être simple ou compl
        </p>    
    </div>
  )
}

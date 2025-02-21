# Satın Alma Sistemi

Bu proje, kullanıcıların kayıt olabileceği, giriş yapabileceği ve admin onayı ile sisteme dahil olabileceği bir satın alma sistemidir. Admin, kullanıcıların statülerini belirleyebilir ve satın alma taleplerini yönetebilir.

## Kurulum

1. Bu projeyi klonlayın:

   ```bash
   git clone https://github.com/username/satin-alma-sistemi.git
   ```

2. Proje dizinine gidin:

   ```bash
   cd satin-alma-sistemi
   ```

3. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

4. Firebase yapılandırmanızı `src/firebase.js` dosyasına ekleyin.

5. Projeyi başlatın:

   ```bash
   npm start
   ```

## Kullanım

- `/register`: Kayıt olma sayfası
- `/login`: Giriş yapma sayfası
- `/forgot-password`: Şifre sıfırlama sayfası
- `/admin`: Admin paneli (Üye onayı ve yönetimi)
- `/purchase-request`: Satın alma talebi oluşturma sayfası
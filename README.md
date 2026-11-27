# KulüpGO tanıtım sitesi

Futbol kulüpleri için yönetim paneli KulüpGO'nun tanıtım sitesi. Düz statik site: derleme yok, `index.html` + `css/` + `js/` + `img/`.

- Adres: https://kulupgo.com
- Yönlendirme `#` ile yapılır (`#ozellikler`, `#fiyatlar`...), bu yüzden sunucu ayarı gerekmez.
- Formlar şimdilik sahte; backend (Supabase vb.) bağlanmadı.
- Yer tutucular `[köşeli parantez]` ile işaretli: kurucu hikâyesi, ekip, referanslar, şirket bilgisi, yasal metinler.

## Yayın
`main` dalına her push GitHub Pages'e otomatik yayınlanır (`.github/workflows/pages.yml`). `CNAME` dosyası alan adını `kulupgo.com` olarak sabitler.

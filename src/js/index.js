Vue.component("dusun", {
    props:["foto_dusun"],
    template: '#dusun'
})

Vue.component("navigation-bar", {
    template: '#navigation-bar'
})


const navigates = [
    {text:"Beranda"},
    {text:"Lokasi"},
    {text:"Potensi Desa"}
]

new Vue({
	el: '#app',
    props:["nama_dusun"],
    data:{        
        activeTab:0,
        activeNavs:navigates[0],
        navigates,
    },
})
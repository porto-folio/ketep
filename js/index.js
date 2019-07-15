
// Dusun's Component
Vue.component('Dusun', {
    data: function () {
      return {
        count: 0
      }
    },
    props:{
        nama_dusun:String,
        val_0:String,
        val_1:String,
        val_2:String,
        val_3:String,
        val_4:String,
        img_dusun:String
    },
    template: `
        <div class="card-dusun _text-center">
            <h4 class="_text-center">{{nama_dusun}}</h4>
            <i-row middle-xs>
                <i-column xs="5">
                    <img :src="img_dusun" style="height:400px" class="image -polaroid" alt="Polaroid">
                </i-column>
                <i-column xs="5">
                <i-row>
                    <i-column xs="4">
                        Jumlah Penduduk
                    </i-column>
                    <i-column xs="8">
                        <i-progress size="lg">
                            <i-progress-bar :value=val_0>{{val_0}}</i-progress-bar>
                        </i-progress>
                    </i-column>
                </i-row>
                <i-row>
                    <i-column xs="4">
                        Jumlah Penduduk
                    </i-column>
                    <i-column xs="8">
                        <i-progress size="lg">
                            <i-progress-bar :value="val_1">{{val_1}}</i-progress-bar>
                        </i-progress>
                    </i-column>
                </i-row>
                <i-row>
                    <i-column xs="4">
                        Jumlah Penduduk
                    </i-column>
                    <i-column xs="8">
                        <i-progress size="lg">
                            <i-progress-bar :value="val_2">{{val_2}}</i-progress-bar>
                        </i-progress>
                    </i-column>
                </i-row>
                <i-row>
                    <i-column xs="4">
                        Jumlah Penduduk
                    </i-column>
                    <i-column xs="8">
                        <i-progress size="lg">
                            <i-progress-bar :value="val_3">{{val_3}}</i-progress-bar>
                        </i-progress>
                    </i-column>
                </i-row>
                </i-column>
            </i-row>
        </div>
    `
})

Vue.component('cardpertanian',{
      props:{
          xs_type:Boolean,
          prod_title:String,
          prod_img:String,
      },
      template: `
        <i-column :xs="xs_type">
            <i-card>
                <img slot="image" :src="prod_img" alt="prod_img" />
                <h4 class="title">{{prod_title}}</h4>
                <slot></slot>
            </i-card>
        </i-column>
      `
})


var app = new Vue({
    el: '#app',
})
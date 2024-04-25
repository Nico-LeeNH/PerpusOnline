<template>
  <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Form Tambah Data</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-warning">
                                <div class="card-header">
                                    <h3 class="card-title">Peminjaman Baru</h3>
                                </div>
                                <form @submit.prevent="tambah">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>id_siswa</label>
                                            <input type="text" class="form-control" v-model="pinjam.id_siswa">
                                        </div>
                                        <!-- <div class="form-group">
                                            <select class="form-control" v-model="pinjam.id_siswa">
                                                <option v-for="(s, index) in siswa" :key="index" :value="s.id">{{s.nama_siswa}}</option>
                                            </select>                                            
                                        </div>                                         -->
                                        <div class="form-group">
                                            <label>Tanggal Pinjam</label>
                                            <b-form-datepicker id="example-datepicker" class="mb-2" v-model="pinjam.tanggal_pinjam"></b-form-datepicker>
                                        </div>
                                        <div class="form-group">
                                            <label>Tanggal Kembali</label>
                                            <b-form-datepicker id="example-datepicker" class="mb-2" v-model="pinjam.tanggal_kembali"></b-form-datepicker>
                                        </div>                                        
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Simpan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'TambahP',
    data(){
        return{
            pinjam:{},
            siswa:{}
        }
    },
    created(){
        axios.get(`http://localhost:8000/api/getsiswa`)
                  .then(res => {
                      this.siswa = res.data
                  })
                  .catch((err) => console.log(err));
    },
    methods:{
        tambah() {
            axios.post(`http://localhost:8000/api/pinjambuku`, this.pinjam
)
                      .then( () => {
                          this.$router.push('/pinjam');
                      })
                      .catch( (err) => console.log(err))
        }
    }
}
</script>

<style>

</style>
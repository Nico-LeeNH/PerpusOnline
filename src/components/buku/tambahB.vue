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
                            <div class="card card-info">
                                <div class="card-header">
                                    <h3 class="card-title">Buku Baru</h3>
                                </div>
                                <form @submit.prevent="tambah">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Judul</label>
                                            <input type="text" class="form-control" v-model="buku.nama_buku">
                                        </div>                                        
                                        <div class="form-group">
                                            <label>Pengarang</label>
                                            <input type="text" class="form-control" v-model="buku.pengarang">
                                        </div>
                                        <div class="form-group">
                                            <label>Deskripsi</label>
                                            <textarea rows="4" class="form-control" v-model="buku.deskripsi"></textarea>
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
    name:'tambahB',
    data(){
        return{
            buku:{}
        }
    },
    
    methods:{
        tambah() {
            axios.post('http://localhost:8000/api/addbuku', this.buku)
                      .then( () => {
                          this.$router.push('/buku');
                      })
                      .catch( err => console.log(err))
        }
    }
}
</script>

<style>

</style>
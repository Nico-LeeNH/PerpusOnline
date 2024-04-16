<template>
  <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Detail</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="m-0">Detail Buku</h4>
                                </div>
                                <div class="card-body text-justify">
                                    <h6>Nama Buku</h6>
                                    <p class="cart-text">{{buku.nama_buku}}</p>

                                    <h6>Pengarang</h6>
                                    <p class="card-text">{{buku.pengarang}}</p>

                                    <h6>Deskripsi</h6>
                                    <p class="card-text">{{buku.deskripsi}}</p>

                                    <router-link class="btn btn-primary" to="/buku">Kembali</router-link>
                                </div>
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
    name:'detailB',
    data(){
        return{
            buku:{}
        }
    },
    created(){
        axios.get(`http://localhost:8000/api/getbukuid/${this.$route.params.id}`)
                  .then(res => {
                      this.buku = res.data
                      console.log(this.buku)
                  })
                  .catch(err => console.log(err))
    }
}
</script>

<style>

</style>
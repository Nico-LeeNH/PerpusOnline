<template>
  <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Detail Peminjaman</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="m-0">Data buku dipinjam</h4>
                                </div>
                                <div class="card-body">     
                                    <table class="table mb-2">
                                        <thead>
                                            <tr>
                                                <th style="width:10px">#</th>
                                                <th>Id Pinjam Buku</th>
                                                <th>Id Siswa</th>
                                                <th>Tanggal Pinjam</th>
                                                <th>Tanggal Kembali</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(d, index) in databuku" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ d.id_peminjaman_buku }}</td>
                                                <td>{{ d.id_siswa }}</td>
                                                <td>{{ d.tanggal_pinjam | moment("DD/MM/YYYY") }}</td>
                                                <td>{{ d.tanggal_kembali | moment("DD/MM/YYYY") }}</td>
                                                <td><span class="badge bg-warning rounded-pill">{{ d.jumlah }}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button v-if="databuku.length != 0" class="btn btn-success" @click="kembali" :disabled="disable">Proses Kembali</button>
                                    <p v-else>Belum memilih buku</p>
                                    <router-link v-if="datapinjam.status == 0" :to="{ name : 'tambahdetail' , params : { id : this.$route.params.id }}" class="btn btn-primary">Tambah Buku</router-link>
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
export default {
    name:'DetailP',
    data() {
        return {
            databuku : {},
            datapinjam : {status : null}
        }
    },
    created() {        
        this.axios.get(`http://localhost:8000/api/getbukuid/${this.$route.params.id}`)
                  .then(res => {
                      this.databuku = res.data
                  })
                  .catch(err => console.log(err))
        this.axios.get(`http://localhost:8000/api/getpinjamid/${this.$route.params.id}`)
                  .then(res => {
                      this.datapinjam.status = res.data.status;
                  })
                  .catch(err => console.log(err));
    },
    computed : {
        disable() {
            if(this.datapinjam.status == 1) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods : {
        kembali() {
            this.axios.post('http://localhost:8000/api/kembalibuku', { id_pinjam : this.$route.params.id})
                      .then(() => {
                        this.axios.put(`http://localhost:8000/api/updatepinjam/status/${this.$route.params.id}`)
                        this.$router.push('/kembali');                        
                      })
                      .catch(err => console.log(err));
                      
        }
    }
}
</script>

<style>
    
</style>
<template>
  <div>
    <navbar-component></navbar-component>
    <sidebar-component></sidebar-component>
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Data Anggota</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="card card-primary card-outline">
                <div class="card-body">
                  <router-link class="btn btn-info mb-2" to="/siswa/tambah">
                    <i class="fas fa-plus"></i>Tambah
                  </router-link>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th style="width: 10px">#</th>
                        <th>Nama Lengkap</th>
                        <th>Kelas</th>
                        <th>Tanggal lahir</th>
                        <th>Gender</th>
                        <th>Alamat</th>
                        <th>username</th>
                        <th>Password</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(s, index) in siswa" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ s.nama_siswa }}</td>
                        <td>{{ s.id_kelas }}</td>
                        <td>{{ s.tanggal_lahir }}</td>
                        <td>{{ s.gender }}</td>
                        <td>{{ s.alamat }}</td>
                        <td>{{ s.username }}</td>
                        <td>{{ s.password }}</td>
                        <td>
                          <div class="btn-group">
                            <router-link
                              class="btn btn-success"
                              :to="{
                                name: 'Detail',
                                params: { id: s.id_siswa },
                              }">
                              detail
                            </router-link>
                            <router-link
                              class="btn btn-warning"
                              :to="{ name: 'Edit', params: { id: s.id_siswa } }"
                            >
                              Edit
                            </router-link>
                            <button
                              type="button"
                              @click="hapus(s.id_siswa)"
                              class="btn btn-danger"
                            >
                              hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
  name: "IndexKu",
  data() {
    return {
      siswa: {},
    };
  },
  created() {
    
    axios.get("http://localhost:8000/api/getsiswa").then((res) => {
      this.siswa = res.data;
      console.log(this.siswa)
    });
  },
  methods: {
    hapus(id) {
      axios.delete(`http://localhost:8000/api/deletesiswa/${id}`).then(() => {
        let i = this.siswa.map((item) => item.id).indexOf(id);
        this.siswa.splice(i, 1);
      });
    },
  },
};
</script>

<style>
</style>
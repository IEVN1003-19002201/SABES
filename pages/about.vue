<template>
  <div>
    <section class="card custom-blue hero-section text-white text-center py-5">
      <div class="container">
        <h1 class="display-4">Bienvenido</h1>
      </div>
    </section>
    <main class="container my-5">
      <div class="row g-3">
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Servicios de internet</h5>
              <p class="card-text">Aquí podrás revisar las instituciones con servicio de internet</p>
              <NuxtLink to="/internet" class="card custom-blue btn btn-primary">Read More</NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Equipos de escritorio</h5>
              <p class="card-text">Aquí podrás revisar la cantidad de equipo de escritorio por instituto</p>
              <NuxtLink to="/pc" class="btn btn-primary">Read More</NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Equipos portatiles</h5>
              <p class="card-text">Aquí podrás revisar la cantidad de equipos portatiles por instituto</p>
              <NuxtLink to="/laptop" class="btn btn-primary">Read More</NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Reportes</h5>
              <p class="card-text">Aquí podrás revisar la cantidad de reportes</p>
              <NuxtLink to="/reportes" class="btn btn-primary">Read More</NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Datos de gatitos</h5>
              <p class="card-text">Aquí podrás tener datos interesantes sobre gatitos</p>
              <NuxtLink to="/gatos" class="btn btn-primary">Read More</NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Internet 2.0</h5>
              <p class="card-text">API de internet</p>
              <NuxtLink to="/api_internet" class="btn btn-primary">Read More</NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Planteles</h5>
              <p class="card-text">Aquí podrás revisar datos de los planteles</p>
              <NuxtLink to="/planteles" class="btn btn-primary">Read More</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

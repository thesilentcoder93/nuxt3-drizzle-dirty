<template>
  <UContainer>
    <h1 class="text-3xl font-semibold">Cats</h1>
    <p class="mt-1 text-gray-400 dark:text-gray-500">Manage all your cats here</p>

    <div class="mt-10">
      <UButton @click="showNew = true">Create new</UButton>
    </div>
    <div class="mt-5 rounded-md border dark:border-gray-700">
      <UTable :columns="columns" :rows="data">
        <template #actions-data="{ row }">
          <div class="flex space-x-2">
            <UButton size="sm" @click="showNew = true">Edit</UButton>
            <UButton size="sm" color="danger">Delete</UButton>
          </div>
        </template>
      </UTable>
    </div>

    <!-- Modal used to create new cat -->
    <UModal v-model="showNew">
      <div class="rounded-lg border p-6 dark:border-gray-700">
        <h2 class="mb-10 text-2xl font-semibold">Create cat</h2>
        <form @submit.prevent="createCat">
          <div class="space-y-3">
            <UFormGroup label="Name">
              <UInput v-model="name" size="md" />
            </UFormGroup>
            <UFormGroup label="Age">
              <UInput type="number" v-model.number="age" size="md" />
            </UFormGroup>
            <UFormGroup label="Breed">
              <UInput v-model="breed" size="md" />
            </UFormGroup>
            <div>
              <UButton type="submit">Create</UButton>
            </div>
          </div>
        </form>
      </div>
    </UModal>
  </UContainer>
</template>

<script setup lang="ts">
  const { data, pending, error, refresh } = await useFetch("/api/cats");

  const columns = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "breed", label: "Breed" },
    { key: "actions", label: "Actions" },
  ];

  const showNew = ref(true);
  const name = ref("");
  const age = ref();
  const breed = ref("");

  const createCat = async () => {
    const catdata = await useFetch("/api/cats", {
      method: "POST",
      body: {
        name: name.value,
        age: age.value,
        breed: breed.value,
      },
    });
    await refresh();

    // reset data
    name.value = "";
    age.value = null;
    breed.value = "";

    showNew.value = false;
  };
</script>

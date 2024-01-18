<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          text: this.newTask.trim(),
          completed: false,
        });
        this.newTask = '';
      }
    },
  },
};
</script>


<template>
  <v-container>
    <!-- Task Input Form -->
    <v-row>
      <v-col>
        <v-form @submit.prevent="addTask">
          <v-text-field v-model="newTask" label="New Task" ></v-text-field>
          <v-btn class="taskButton" type="submit" color="primary">Add Task</v-btn>
        </v-form>
      </v-col>
    </v-row>

    <!-- Task List -->
    <v-col>
      <v-row v-for="(task, index) in tasks" :key="index" class="mb-2">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title :class="{ 'completed-task': task.completed }">
              {{ task.text }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-checkbox v-model="task.completed" label="Completed"></v-checkbox>
          </v-list-item-action>
        </v-list-item>
      </v-row>
    </v-col>
  </v-container>
</template>


<style scoped>
.completed-task {
  text-decoration: line-through;
}
</style>
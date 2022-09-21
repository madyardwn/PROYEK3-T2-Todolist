<script>
  export default {
    name: "todoList",
    data() {
      return{
        tasks: [
          { name: 'Rabu : Matdis, Alin' },
          { name: 'Kamis : PBO, Database'},
          { name: 'Jumat : Godot'},
        ]
      }
      
    },
    methods: {
      newItem: function(){
        if(!this.tasks.name){
          return
        }
        this.tasks.push({
          name: this.tasks.name,
          del: ''
        });
        this.tasks.name ="";
      },
      delItem: function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1)
      }
    }
  }
</script>

<template>
    <h1 class="app-header">TO DO LIST</h1>

    <div class="add-task">
        <input type="text" autocomplete="off" placeholder="Input Task Baru" class="task-input" v-model="tasks.name" @keyup.enter="newItem">
        <button class="submit-task" @click=""></button>
    </div>
    
    <ul class="task-list">
      <li class="task-list-item" v-for="task in tasks">
        <label class="task-list-item-label">
          <input type="checkbox">
          <span>{{task.name}}</span>
        </label>
        <span class="delete-btn" title="Delete Task" @click="delItem(task)">{{task.del}}</span>
      </li>
    </ul>
</template>
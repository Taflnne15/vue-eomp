
import { createStore } from 'vuex'
const dataLink = "https://taflnne15.github.io/vue_eompData/data/"
export default createStore({
  state: {
    testimonials:null,
    projects: null,
    skills:null,
    education:null
  }, 

  getters: {
  },
  mutations: {
    setTestimonials(state, testimonials){
      state.testimonials = testimonials;
    }, setProjects (state, projects){
      state.projects = projects
    },
    setSkills(state, skills){
      state.skills = skills;
    }, setEducation(state, education){
      state.education = education
    },
  
    


  
  },
  actions: {
    async fetchTestimonials(context){
      try{
        let res = await fetch(dataLink);
        let { Testimonials } = await res.json()
        context.commit('setTestimonials' ,Testimonials)
      }
      catch(e){
        console.log(e.message);
      }
    } ,
    async fetchProjects(context){
      try{
        let res = await fetch(dataLink);
        let { Projects } = await res.json()
        context.commit('setProjects', Projects)
      }
      catch(e){
        console.log(e.message)
      }
    },
    async fetchSkills(context){
      try{
        let res = await fetch(dataLink);
        let { Skills } = await res.json()
        context.commit('setSkills', Skills)
      }
      catch(e){
        console.log(e.message)
      }
    }, async fetchEducation (context){
      try{
        let res = await fetch(dataLink);
        let { Education } = await res.json()
        context.commit('setEducation', Education)
      } catch(e){
        console.log(e.message)
      }
    }
  }, 

  modules: {
  }
})

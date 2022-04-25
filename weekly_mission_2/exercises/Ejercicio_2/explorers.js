const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log("\nImprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
   explorers.forEach(explorer => console.log("Nombre:" + explorer.name))

   console.log("\nImprime el stack de cada explorer, usa FOR EACH")
   explorers.forEach(explorer => console.log("Stack: " + explorer.stack))
   
   console.log("\nCrea una nueva lista con las listas de stacks de cada explorer, usa MAP")
   const stacks = explorers.map(explorer=>explorer.stack)
   console.log(stacks)
   
   console.log("\nObtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
   const explorersStackJS = explorers.filter(explorer=>explorer.stack.includes("js"))
   console.log(explorersStackJS)
   
   console.log("\nBusca el primer explorer que sea de la CDMX, usa FIND")
   const firstExplorerFromCDMX= explorers.find(explorer => explorer.city === "CDMX")
   console.log(firstExplorerFromCDMX)
   
   console.log("\nObtén la suma de todos los exercises_completed, usa REDUCE")
   const totalExercisesCompleted = explorers.reduce((i,explorer) => i + explorer.exercises_completed, 0)
   console.log(totalExercisesCompleted)
   
   console.log("\nObtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
   const excercisesFinishedValidation = explorers.some(explorer => explorer.missions.frontend.exercisesFinished === true)
   console.log(excercisesFinishedValidation)
   
   console.log("\nObtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
   const isFinishedAll = explorers.every(explorer => explorer.missions.onboarding.exercisesFinished === true)
   console.log(isFinishedAll)
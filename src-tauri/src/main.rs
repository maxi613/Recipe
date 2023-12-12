// Prevents additional console window on Windows in release, DO NOT REMOVE!!

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::string;

use serde::de::value::Error;
#[path = "models/project.rs"] mod project;

#[tauri::command]
fn ping() -> bool {
  true  
}

#[tauri::command(rename_all = "snake_case")]
fn save_project(project_id: String)-> Result<String,String>
{
  if project_id.is_empty(){
    return Ok(String::from("Error"));
  }
  println!("{}", project_id);
  return Ok(String::from("success"));
}

fn main() {

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![ping, save_project])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

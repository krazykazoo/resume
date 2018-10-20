package com.pasciak.resumeui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UIController {

  @RequestMapping("/{path:[^\\.]+}/**")
  public String get() {
    return "forward:/";
  }
}

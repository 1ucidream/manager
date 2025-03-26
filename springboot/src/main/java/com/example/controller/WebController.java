package com.example.controller;

import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.StrUtil;
import com.example.common.Result;
import com.example.common.enums.ResultCodeEnum;
import com.example.common.enums.RoleEnum;
import com.example.entity.Account;
import com.example.entity.Teacher;
import com.example.service.AdminService;
import com.example.service.LabadminService;
import com.example.service.StudentService;
import com.example.service.TeacherService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * 基础前端接口
 * login功能相关接口
 */
@RestController
public class WebController {

    @Resource
    private AdminService adminService;

    @Resource
    private LabadminService labadminService;

    @Resource
    private StudentService studentService;

    @Resource
    private TeacherService teacherService;

    @GetMapping("/")
    public Result hello() {
        return Result.success("访问成功");
    }

    /**
     * 登录 为什么是post请求
     */
    @PostMapping("/login")
    public Result login(@RequestBody Account account) {
        if (ObjectUtil.isEmpty(account.getUsername()) || ObjectUtil.isEmpty(account.getPassword())) {
            return Result.error(ResultCodeEnum.PARAM_LOST_ERROR);
        }

        // 依次尝试不同角色的登录
        try {
            account = adminService.login(account);
            return Result.success(account);
        } catch (Exception e) {
            // 如果不是管理员，继续尝试其他角色
        }

        try {
            account = labadminService.login(account);
            return Result.success(account);
        } catch (Exception e) {
            // 如果不是实验室管理员，继续尝试其他角色
        }

        try {
            account = studentService.login(account);
            return Result.success(account);
        } catch (Exception e) {
            // 如果不是学生，继续尝试其他角色
        }

        try {
            account = teacherService.login(account);
            return Result.success(account);
        } catch (Exception e) {
            // 如果不是教师，说明用户名或密码错误
            return Result.error(ResultCodeEnum.USER_ACCOUNT_ERROR);
        }
    }

    /**
     * 注册
     */
    @PostMapping("/register")
    public Result register(@RequestBody Account account) {
        if (StrUtil.isBlank(account.getUsername()) || StrUtil.isBlank(account.getPassword())
                || ObjectUtil.isEmpty(account.getRole())) {
            return Result.error(ResultCodeEnum.PARAM_LOST_ERROR);
        }

        if (RoleEnum.STUDENT.name().equals(account.getRole())) {
            studentService.register(account);
        }
        return Result.success();
    }

    /**
     * 修改密码
     */
    @PutMapping("/updatePassword")
    public Result updatePassword(@RequestBody Account account) {
        if (StrUtil.isBlank(account.getUsername()) || StrUtil.isBlank(account.getPassword())
                || ObjectUtil.isEmpty(account.getNewPassword())) {
            return Result.error(ResultCodeEnum.PARAM_LOST_ERROR);
        }
        if (RoleEnum.ADMIN.name().equals(account.getRole())) {
            adminService.updatePassword(account);
        }

        if (RoleEnum.LABADMIN.name().equals(account.getRole())){
          labadminService.updatePassword(account);
        }

        if (RoleEnum.STUDENT.name().equals(account.getRole())) {
           studentService.updatePassword(account);
        }

        return Result.success();
    }

}

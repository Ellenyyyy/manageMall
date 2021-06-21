import {request} from "./request";
import QS from "qs";

export function getRolesList() {
  return request({
    url: '/roles',
    method: 'get',
  })
}

export function deleteRole3(roleId,rightId) {
  return request({
    url: `/roles/${roleId}/rights/${rightId}`,
    method: 'delete',
  })
}


export function getRightList() {
  return request({
    url: `/rights/tree`,
    method: 'get',
  })
}

export function giveRights(rid,str) {
  return request({
    url: `/roles/${rid}/rights`,
    method: 'post',
    data: {
      rids: str
    }
  })
}
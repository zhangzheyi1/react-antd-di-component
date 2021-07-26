/* eslint-disable react/prop-types */
/** @typedef {import('../types/dom').KeyboardEv} KeyboardEv */
/** @typedef {import('antd/lib/config-provider/SizeContext').SizeType} InputSizes */
import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const stPre = { color: 'red', display: 'inline-block', verticalAlign: 'top' };
const stRemark = { paddingLeft: '8px', color: '#999999' };

/**
 * @param {object} props
 * @param {boolean} [props.pre=false] - 是够添加前置的一小段占位空间
 * @param {{input:object, title:object}} [props.extraStyle={}] - 额外的自定义样式
 * @param {isSearch:boolean} [props.isSearch=false] - 是否有搜索功能
 */
export default function DiInput(props) {
  const {
    title, value, onChange, block, disabled, required, pre, extraStyle = {}, remark, isSearch = false,
    placeholder = '', maxLength = 9999, enterButton = '搜索', onSearch, loading,
  } = props;
  const style = { display: 'inline-block' };
  if (block) style.display = 'block';

  const preView = pre ? <pre style={stPre}>{required ? '* ' : '  '}</pre> : '';

  const {
    title: titleSt = { width: '80px', fontWeight: 500 },
    input: inputSt = { width: 120 },
    inputSize = 'small',
  } = extraStyle;

  return (
    <div className="difilter-item-wrap" style={style}>
      {preView}
      <span className="func-title" style={titleSt}>{title}</span>
      {!isSearch ? <Input disabled={disabled} value={value} onChange={onChange}
        size={inputSize} style={inputSt} placeholder={placeholder} maxLength={maxLength} /> : 
        <Search disabled={disabled} value={value} onChange={onChange} enterButton={enterButton}
          size={inputSize} style={inputSt} placeholder={placeholder} maxLength={maxLength}
          onSearch={onSearch} loading={loading}/>}
      <span style={stRemark}>{remark}</span>
    </div>
  );
}

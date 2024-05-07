// unit.test.js


import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
 } from '../code-to-unit-test/unit-test-me';
 
 
 
 
 //These are all of the tests for the isPhoneNumber function
 //this test should  be true because this is a valid phone number format
 test('tests if 818-555-6678 is a valid phone number', () => {
  expect(isPhoneNumber('818-421-4695')).toBe(true);
 });
 
 
 //this test should be false since this is not a valid number format
 test('tests if 66-89-668 is not a valid phone number', () => {
  expect(isPhoneNumber('66-89-668')).toBe(false);
 });
 
 
 //this test should  be true because this is a valid phone number format
 test('tests if 378-555-7823', () => {
  expect(isPhoneNumber('378-555-7823')).toBe(true);
 });
 
 
 //this test should be false because this is not a valid phone number format
 test('tests if 378-555-78', () => {
  expect(isPhoneNumber('378-555-78')).toBe(false);
 });
 
 
 //These are all of the tests for the isEmail function
 //this test should be true because it is a valid email
 test('tests if dregmi@ucsd.edu is an email', () => {
  expect(isEmail('dregmi@ucsd.edu')).toBe(true);
 });
 
 
 //this test should return false because this is not a valid email format
 test('tests if hello world is an email', () => {
  expect(isEmail('hello world')).toBe(false);
 });
 
 
 //this test should return true because it is a valid email format
 test('tests if rituregmi@gmail.com is an email', () => {
  expect(isEmail('rituregmi@gmail.com')).toBe(true);
 });
 
 
 //this test should return false because this is not a valid email
 test('tests if 372r82eg32ue is an email', () => {
  expect(isEmail('372r82eg32ue')).toBe(false);
 });
 
 
 //These half of the tests for the isStrongPassword function
 //this test should return true because it meets the criteria for a strong password
 test('tests if asdf1234 is a strong password', () => {
  expect(isStrongPassword('asdf1234')).toBe(true);
 });
 
 
 //this test should return false because it does not meet the criteria to be considered a strong password
 test('tests if 123wtwvu is a strong password', () => {
  expect(isStrongPassword('123wtwvu')).toBe(false);
 });
 
 
 //this test should return true because it meets the criteria for a strong ppassword
 test('tests if e1epHan4 is a strong password', () => {
  expect(isStrongPassword('e1ep_Han4')).toBe(true);
 });
 
 
 //this test should return false because it does not meet the criteria for a strong password
 test('tests if _3eBr4 is a strong password', () => {
  expect(isStrongPassword('_3eBr4')).toBe(false);
 });
 
 
 //These are all the tests for isDate
 //this test should return true because this is a valid date
 test('tests if 08/04/2004 is a valid date', () => {
  expect(isDate('08/04/2004')).toBe(true);
 });
 
 
 //this test should return false because it is not a valid date
 test('tests if 7/11/1 is a valid date', () => {
  expect(isDate('7/11/1')).toBe(false);
 });
 
 
 //this test should return true because this is a valid date
 test('tests if 09/04/1982 is a valid date', () => {
  expect(isDate('09/04/1982')).toBe(true);
 });
 
 
 //this test should return false because it is not a valid date
 test('tests if 1/-2/90 is a valid date', () => {
  expect(isDate('1/-2/90')).toBe(false);
 });
 
 
 //These are all the tests for a valid hex color
 //this test should return true because this is a valid hex code
 test('tests if FFF is a valid hex code', () => {
  expect(isHexColor('FFF')).toBe(true);
 });
 
 
 //this should return false because this is not a valid hex code
 test('tests if ABCD is a valid hex code', () => {
  expect(isHexColor('ABCD')).toBe(false);
 });
 
 
 //this test should return true because this is a valid hex code
 test('tests if cfadcb is a valid hex code', () => {
  expect(isHexColor('cfadcb')).toBe(true);
 });
 
 
 //this should return false because this is not a valid hex code
 test('tests if 98738 is a valid hex code', () => {
  expect(isHexColor('98738')).toBe(false);
 });
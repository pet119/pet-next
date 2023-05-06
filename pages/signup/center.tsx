import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import Link from 'next/link';
import { renderToString } from 'react-dom/server';

interface FormData {
  email: string;
  password: string;
  passwordConfirm: string;
  centerName: string;
  companyRegistration: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required(),
  centerName: yup.string().required(),
  companyRegistration: yup
    .string()
    .min(12)
    .length(12, 'Company registration number must be 12 characters')
    .required(),
});

export default function Center() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="이메일 입력"
          {...register('email', { required: true })}
          className={errors.email ? 'errorStyle' : 'inputStyle'}
        />
        {errors.email && (
          <span id="email-error" role="alert">
            {errors.email.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호 입력"
          {...register('password')}
          className={errors.email ? 'errorStyle' : 'inputStyle'}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          id="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          {...register('passwordConfirm')}
          className={errors.email ? 'errorStyle' : 'inputStyle'}
        />
        {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
      </div>
      <div>
        <label htmlFor="centerName">유기동물센터 명</label>
        <input
          id="centerName"
          placeholder="유기동물센터 명 입력"
          {...register('centerName', { required: true })}
          className={errors.email ? 'errorStyle' : 'inputStyle'}
        />
        {errors.centerName && <span>{errors.centerName.message}</span>}
      </div>
      <div>
        <label htmlFor="companyRegistration">사업자등록번호</label>
        <input
          id="companyRegistration"
          placeholder="사업자등록번호 입력"
          {...register('companyRegistration', { required: true })}
          className={errors.email ? 'errorStyle' : 'inputStyle'}
        />
        {errors.companyRegistration && <span>{errors.companyRegistration.message}</span>}
      </div>
      <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
      <style jsx>{`
        .inputStyle {
          border: 1px solid #ccc;
        }
        .errorStyle {
          border: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
}

const serverMarkup = renderToString(<Center />);
console.log(serverMarkup);

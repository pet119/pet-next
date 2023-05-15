import * as React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

interface FormData {
  email: string;
  password: string;
  passwordConfirm: string;
  nickName: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required(),
  nickName: yup.string().required(),
});

export default function Normal() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { email: '', password: '', passwordConfirm: '' },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push('/main');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">
          이메일
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
        </label>
      </div>
      <div>
        <label htmlFor="password">
          비밀번호
          <input
            id="password"
            type="password"
            placeholder="비밀번호 입력"
            {...register('password')}
            className={errors.email ? 'errorStyle' : 'inputStyle'}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </label>
      </div>
      <div>
        <label htmlFor="passwordConfirm">
          비밀번호 확인
          <input
            id="passwordConfirm"
            type="password"
            placeholder="비밀번호 확인"
            {...register('passwordConfirm')}
            className={errors.email ? 'errorStyle' : 'inputStyle'}
          />
          {errors.passwordConfirm && (
            <span>{errors.passwordConfirm.message}</span>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="nickName">
          별명
          <input
            id="nickName"
            type="text"
            placeholder="별명 입력"
            {...register('nickName')}
            className={errors.email ? 'errorStyle' : 'inputStyle'}
          />
          {errors.nickName && <span>{errors.nickName.message}</span>}
        </label>
      </div>
      <button type="submit" className="btn-primary">
        회원가입
      </button>
      <div>
        <Link href="/signup">
          <button type="button" className="btn-primary">
            취소
          </button>
        </Link>
      </div>
      <style jsx>{`
        .inputStyle {
          border: 1px solid #ccc;
        }
        .errorStyle {
          border: 1px solid #ccc;
        }
      `}</style>
    </form>
  );
}

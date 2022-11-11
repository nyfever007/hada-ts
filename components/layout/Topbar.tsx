import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRight } from 'tabler-icons-react';

const Topbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="border-b border-b-slate-100 bg-slate-50 ">
        <div className="max-w-7xl m-auto text-center px-2">
          <div className="flex justify-between py-3 items-center">
            <div className="flex gap-4 md:gap-5 text-xs font-medium text-slate-600 items-center">
              <Link href={`/`}>
                <span
                  className={`${
                    (router.pathname == '/' ||
                      router.pathname.startsWith('/residential')) &&
                    'text-slate-900'
                  }`}
                >
                  주거
                </span>
              </Link>
              <Link href={`/commercial`}>
                <span
                  className={`${
                    router.pathname.startsWith('/commercial') &&
                    'text-slate-900'
                  }`}
                >
                  상업
                </span>
              </Link>
              <Link href={`/business`}>
                <span
                  className={`${
                    router.pathname.startsWith('/business') && 'text-slate-900'
                  }`}
                >
                  비즈니스
                </span>
              </Link>
              <Link href="/agents">
                <span
                  className={`flex gap-x-0.5 items-center ${
                    router.pathname.startsWith('/agents') && 'text-slate-900'
                  }`}
                >
                  <span>에이전트</span>
                  <span>
                    <ChevronRight size={18} strokeWidth={2} />
                  </span>
                </span>
              </Link>
            </div>
            <div>
              {/* {status === 'authenticated' && session && (
                <div className='flex gap-x-4 items-center text-sm font-medium'>
                  <div>
                    <Link
                      href={`/account/${
                        session.user.role == 'A' ? 'agent/' : 'user/'
                      }`}
                    >
                      <a className='hover:text-indigo-500'>
                        <Avatar
                          src={`/profile/${session.user.userImg}`}
                          radius='xl'
                          size='sm'
                        />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <a
                      className='hover:text-indigo-500 cursor-pointer'
                      onClick={() => signOut()}
                    >
                      로그아웃
                    </a>
                  </div>
                </div>
              )} */}

              <div className="flex gap-x-2 items-center text-xs font-medium">
                <div className='after:inline-block after:w-1 after:h-1 after:content-[""] after:rounded-full after:bg-slate-400 after:ml-2 after:mb-1'>
                  <Link href="/register">
                    <span className="hover:text-indigo-500">회원가입</span>
                  </Link>
                </div>
                <div>
                  <Link href="/signin">
                    <span className="hover:text-indigo-500">로그인</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;

import { render, screen } from '@testing-library/react';
import { describe, expect, it, Mock, vi } from 'vitest';

import { Posts } from '@/features/posts/components/Posts';
import { useFetchPosts } from '@/features/posts/hooks/useFetchPosts';

// useFetchPostsのモック
vi.mock('@/features/posts/hooks/useFetchPosts');

describe('Posts', () => {
  it('ローディング中にLoadingSpinnerを表示する', () => {
    (useFetchPosts as Mock).mockReturnValue({ data: null });
    render(<Posts />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('投稿のリストを表示する', () => {
    const mockPosts = [
      { id: 1, body: '投稿1', title: '投稿1', userId: 1 },
      { id: 2, body: '投稿2', title: '投稿2', userId: 2 },
    ];
    (useFetchPosts as Mock).mockReturnValue({ data: mockPosts });
    render(<Posts />);
    expect(screen.getByText('投稿1')).toBeInTheDocument();
    expect(screen.getByText('投稿2')).toBeInTheDocument();
  });
});

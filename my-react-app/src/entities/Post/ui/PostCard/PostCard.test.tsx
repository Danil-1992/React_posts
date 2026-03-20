import { render, screen } from '@testing-library/react';
import PostCard from './PostCard';
import type { postType } from '../../types/postSchema';

const mockPost: postType = {
  id: 1,
  userId: 101,
  title: 'Тестовый пост',
  body: 'Это тело тестового поста для проверки рендера компонента'
};

describe('PostCard', () => {
  it('должен рендерить заголовок поста', () => {
    render(<PostCard post={mockPost} />);
    
    const title = screen.getByText('Тестовый пост');
    expect(title).toBeInTheDocument();
  });

  it('должен рендерить userId поста', () => {
    render(<PostCard post={mockPost} />);
    
    const userId = screen.getByText(/userId - 101/);
    expect(userId).toBeInTheDocument();
  });

  it('должен рендерить тело поста', () => {
    render(<PostCard post={mockPost} />);
    
    const body = screen.getByText('Это тело тестового поста для проверки рендера компонента');
    expect(body).toBeInTheDocument();
  });

  it('должен обрезать длинный текст (>100 символов)', () => {
    const longPost: postType = {
      ...mockPost,
      body: 'A'.repeat(150) 
    };
    
    render(<PostCard post={longPost} />);
    
    const body = screen.getByText(/A{100} .../);
    expect(body).toBeInTheDocument();
    expect(body.textContent?.length).toBeLessThanOrEqual(105); 
  });

  it('не должен обрезать короткий текст (<100 символов)', () => {
    const shortPost: postType = {
      ...mockPost,
      body: 'Короткий текст'
    };
    
    render(<PostCard post={shortPost} />);
    
    const body = screen.getByText('Короткий текст');
    expect(body).toBeInTheDocument();
    expect(body.textContent).not.toContain('...');
  });
});
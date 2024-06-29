# _plugins/reading_time.rb

module Jekyll
    module ReadingTime
      def reading_time(input)
        words_per_minute = 200
        words = input.split.size
        minutes = (words / words_per_minute).ceil
        "#{minutes} min read"
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::ReadingTime)
  
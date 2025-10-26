import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 6.99446H12.0179M12.0179 6.99446H20C21.1046 6.99446 22 7.88989 22 8.99446V10M12.0179 6.99446L9.30008 3.39718C9.11109 3.14703 8.81572 3 8.5022 3H3C2.44772 3 2 3.44772 2 4V19C2 20.1046 2.89543 21 4 21H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 19.7727C19.7673 19.7727 21.2 18.3075 21.2 16.5C21.2 14.6925 19.7673 13.2273 18 13.2273M18 19.7727C16.2327 19.7727 14.8 18.3075 14.8 16.5C14.8 14.6925 16.2327 13.2273 18 13.2273M18 19.7727V21M18 13.2273V12M15.0913 14.7149L14.0004 14.0455M22 18.9545L20.9092 18.2851M20.9087 14.7149L21.9996 14.0455M14 18.9545L15.0908 18.2851', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'FolderManagement',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
